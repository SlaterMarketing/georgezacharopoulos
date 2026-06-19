import type { KintanaSiteManifest } from "@kintana/sdk";
import { createKintanaClientFromEnv } from "./kintana-env";

export async function fetchSiteManifest(): Promise<KintanaSiteManifest | null> {
  try {
    const client = createKintanaClientFromEnv();
    return await client.getSiteManifest();
  } catch {
    return null;
  }
}

export function endpointSlugFromManifest(
  manifest: KintanaSiteManifest | null,
  key: "showRequest" | "newsletter",
  fallback: string,
): string {
  const fromEndpoints = manifest?.endpoints?.[key]?.slug;
  if (fromEndpoints) return fromEndpoints;
  const fromForms = manifest?.forms?.[key]?.slug;
  if (fromForms) return fromForms;
  return fallback;
}
