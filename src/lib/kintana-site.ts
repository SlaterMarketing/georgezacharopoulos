import type { KintanaSiteManifest } from "@kintana/sdk";

import { createKintanaClientFromEnv, hasKintanaCredentials } from "./kintana-env";

const PLACEHOLDER_FORM_ID = /paste|your-form|xxxxxxxx|example/i;

export function isConfiguredFormId(id?: string): boolean {
  const trimmed = id?.trim();
  if (!trimmed) return false;
  return !PLACEHOLDER_FORM_ID.test(trimmed);
}

export async function fetchSiteManifest(): Promise<KintanaSiteManifest | null> {
  if (!hasKintanaCredentials()) return null;

  try {
    return await createKintanaClientFromEnv().getSiteManifest();
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error("[michaeljbevan] getSiteManifest failed:", error);
    }
    return null;
  }
}

export function formIdFromManifest(
  manifest: KintanaSiteManifest | null,
  key: string,
  envOverride?: string,
): string | undefined {
  if (isConfiguredFormId(envOverride)) return envOverride!.trim();
  return manifest?.forms[key]?.id;
}

export async function resolveFormId(opts: {
  kind: string;
  manifestKey: string;
  manifest?: KintanaSiteManifest | null;
  envOverride?: string;
}): Promise<string | undefined> {
  const fromManifest = formIdFromManifest(opts.manifest ?? null, opts.manifestKey, opts.envOverride);
  if (fromManifest) return fromManifest;

  if (!hasKintanaCredentials()) return undefined;

  try {
    const form = await createKintanaClientFromEnv().findForm({ kind: opts.kind });
    return form?.id;
  } catch {
    return undefined;
  }
}
