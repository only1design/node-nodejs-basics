import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, 'files');
const destPath = path.join(__dirname, 'files_copy');

const copy = async () => {
  try {
    fs.cpSync(srcPath, destPath, {recursive: true, errorOnExist: true, force: false});
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await copy();
