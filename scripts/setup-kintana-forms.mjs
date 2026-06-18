import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { createKintanaClient } from "@kintana/sdk";

function loadEnv() {
  const envPath = resolve(process.cwd(), ".env");
  const env = { ...process.env };
  if (!readFileSync(envPath, "utf8")) return env;

  for (const raw of readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq <= 0) continue;
    env[line.slice(0, eq).trim()] = line.slice(eq + 1).trim();
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

const FORMS = [
  {
    kind: "SHOW_REQUEST",
    title: "Get in touch",
    slug: "contact",
    successMessage: "Thanks — we'll be in touch soon.",
  },
];

async function ensureForm(def) {
  const existing = await client.listEmbedFormsWorkspace();
  const match = existing.find(
    (f) => f.kind.toUpperCase() === def.kind && f.slug === def.slug,
  );

  if (match) {
    await client.updateEmbedFormWorkspace(match.id, {
      successMessage: def.successMessage,
      active: true,
    });
    console.log(`${def.kind} form ready: ${match.id}`);
    return match.id;
  }

  const created = await client.createEmbedFormWorkspace({
    kind: def.kind,
    title: def.title,
    slug: def.slug,
    successMessage: def.successMessage,
    active: true,
  });

  console.log(`Created ${def.kind} form: ${created.id}`);
  return created.id;
}

try {
  for (const def of FORMS) {
    await ensureForm(def);
  }

  const publicForms = await client.listForms();
  console.log("\nActive public forms:");
  for (const form of publicForms) {
    console.log(`  ${form.kind} · ${form.slug} · ${form.id}`);
  }

  try {
    const manifest = await client.getSiteManifest();
    console.log("\nSite manifest forms:", manifest.forms);
  } catch (error) {
    console.log("\nSite manifest:", error.message);
  }
} catch (error) {
  console.error("\nSetup failed:", error.message);
  process.exit(1);
}
