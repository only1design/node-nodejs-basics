import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await fs.promises.rm(filePath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await remove();
