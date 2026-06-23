import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "solo-shows");
await mkdir(outDir, { recursive: true });

const images = [
  {
    file: "intro.jpg",
    url: "https://static.wixstatic.com/media/254455_0e74571cee6d40e6be7f55aa957c6422~mv2.jpg/v1/fill/w_980,h_1466,al_c,q_85,enc_auto/file.jpg",
  },
  {
    file: "greek-in-the-sheets.jpg",
    url: "https://static.wixstatic.com/media/254455_e157f1094a2344e2a4e40191a97224fe~mv2.jpg/v1/fill/w_980,h_1586,al_c,q_85,enc_auto/file.jpg",
  },
  {
    file: "fifty-fifty.jpg",
    url: "https://static.wixstatic.com/media/254455_3c6dd0af587a485f82c11ca07bd6f480~mv2.jpg/v1/fill/w_980,h_1200,al_c,q_85,enc_auto/file.jpg",
  },
];

for (const image of images) {
  const res = await fetch(image.url);
  if (!res.ok) throw new Error(`Failed ${image.file}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const dest = path.join(outDir, image.file);
  await writeFile(dest, buf);
  console.log(`Saved ${dest} (${buf.length} bytes)`);
}
