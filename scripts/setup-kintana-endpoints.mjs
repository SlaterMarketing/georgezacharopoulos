import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createKintanaClient } from "@kintana/sdk";

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env");
  const env = { ...process.env };
  try {
    const raw = readFileSync(envPath, "utf8");
    for (const line of raw.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq <= 0) continue;
      env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
    }
  } catch {
    /* no .env */
  }
  return env;
}

const env = loadEnv();
const apiKey = env.PUBLIC_KINTANA_API_KEY?.trim();
const secretApiKey = env.KINTANA_SECRET_API_KEY?.trim();
const baseUrl = env.PUBLIC_KINTANA_BASE_URL?.trim();

if (!apiKey || !secretApiKey || !baseUrl) {
  console.error("Missing PUBLIC_KINTANA_API_KEY, KINTANA_SECRET_API_KEY, or PUBLIC_KINTANA_BASE_URL in .env");
  process.exit(1);
}

const client = createKintanaClient({ apiKey, secretApiKey, baseUrl });

const ENDPOINTS = [
  {
    kind: "SHOW_REQUEST",
    title: "Get in touch",
    slug: "contact",
    successMessage: "Thanks — we'll be in touch soon.",
  },
  {
    kind: "NEWSLETTER",
    title: "Mailing list",
    slug: "newsletter",
    successMessage: "You're on the list!",
  },
];

async function ensureEndpoint(def) {
  const existing = await client.listEmbedFormsWorkspace();
  const match = existing.find(
    (f) => f.kind.toUpperCase() === def.kind && f.slug === def.slug,
  );

  if (match) {
    await client.updateEmbedFormWorkspace(match.id, {
      successMessage: def.successMessage,
      active: true,
    });
    console.log(`${def.kind} endpoint ready: ${def.slug}`);
    return;
  }

  await client.createEmbedFormWorkspace({
    kind: def.kind,
    title: def.title,
    slug: def.slug,
    successMessage: def.successMessage,
    active: true,
    fieldsJson: [],
  });

  console.log(`Created ${def.kind} endpoint: ${def.slug}`);
}

try {
  for (const def of ENDPOINTS) {
    await ensureEndpoint(def);
  }

  const endpoints = await client.listEndpoints();
  console.log("\nActive endpoints:");
  for (const endpoint of endpoints) {
    console.log(`  ${endpoint.intent} · ${endpoint.slug}`);
  }

  try {
    const manifest = await client.getSiteManifest();
    console.log("\nManifest endpoints:", manifest.endpoints);
  } catch {
    /* site-bound key optional */
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}
