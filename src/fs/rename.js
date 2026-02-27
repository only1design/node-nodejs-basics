import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const oldFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.promises.access(newFilePath)

    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err;
    }
  }

  try {
    await fs.promises.rename(oldFilePath, newFilePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
