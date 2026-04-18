import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(scriptDir, "..", "dist");

async function prependIfMissing(fileName, snippet) {
  const filePath = path.join(distDir, fileName);
  const source = await readFile(filePath, "utf8");

  if (source.startsWith(snippet)) {
    return;
  }

  await writeFile(filePath, `${snippet}${source}`, "utf8");
}

await prependIfMissing("shockwave.js", 'import "./shockwave.css";\n');
await prependIfMissing(
  "shockwave.cjs",
  'try { require("./shockwave.css"); } catch {}\n'
);
