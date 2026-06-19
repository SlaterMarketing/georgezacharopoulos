import { createKintanaClient } from "@kintana/sdk";

type PublicEnvKey =
  | "PUBLIC_KINTANA_API_KEY"
  | "PUBLIC_KINTANA_BASE_URL"
  | "PUBLIC_KINTANA_TRACKER_TOKEN"
  | "PUBLIC_SITE_URL";

function publicEnv(key: PublicEnvKey): string | undefined {
  const runtime = typeof process !== "undefined" ? process.env[key]?.trim() : "";
  if (runtime) return runtime;
  return import.meta.env[key];
}

export function getKintanaEnv() {
  return {
    apiKey: publicEnv("PUBLIC_KINTANA_API_KEY"),
    baseUrl: publicEnv("PUBLIC_KINTANA_BASE_URL"),
    trackerToken: publicEnv("PUBLIC_KINTANA_TRACKER_TOKEN"),
    siteUrl: publicEnv("PUBLIC_SITE_URL"),
  };
}

export function hasKintanaCredentials() {
  const { apiKey, baseUrl } = getKintanaEnv();
  return Boolean(apiKey?.trim() && baseUrl?.trim());
}

export function createKintanaClientFromEnv() {
  const { apiKey, baseUrl } = getKintanaEnv();
  return createKintanaClient({ apiKey: apiKey!, baseUrl: baseUrl! });
}
