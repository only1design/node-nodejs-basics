import stream from "node:stream";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  await stream.promises.pipeline(
    fs.createReadStream(filePath),
    process.stdout,
  )
};

await read();
