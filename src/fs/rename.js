import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const oldFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  if (fs.existsSync(newFilePath)) {
    throw new Error('FS operation failed');
  }

  try {
    fs.renameSync(oldFilePath, newFilePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await rename();
