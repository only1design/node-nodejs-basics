import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileContent = await fs.promises.readFile(filePath);

    console.log(fileContent.toString());
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await read();
