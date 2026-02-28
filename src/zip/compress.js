import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import stream from "node:stream";
import * as zlib from "node:zlib";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcPath = path.join(__dirname, 'files', 'fileToCompress.txt');
const destPath = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const gzip = zlib.createGzip();

  await stream.promises.pipeline(
    fs.createReadStream(srcPath),
    gzip,
    fs.createWriteStream(destPath),
  )
};

await compress();
