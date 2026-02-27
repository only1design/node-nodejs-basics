import stream from "node:stream";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  await stream.promises.pipeline(
    process.stdin,
    fs.createWriteStream(filePath),
  )
};

await write();
