import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(__dirname, 'files');

const list = async () => {
  try {
    const files = await fs.promises.readdir(folderPath);

    console.log(files)
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await list();
