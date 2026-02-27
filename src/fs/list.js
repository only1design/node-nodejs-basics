import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    console.log(fs.readdirSync(folderPath))
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
