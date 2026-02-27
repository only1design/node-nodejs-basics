import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import crypto from "node:crypto";
import stream from "node:stream";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = crypto.createHash('sha256');

  const writable = new stream.Writable({
    write(chunk, encoding, callback) {
      hash.update(chunk);
      callback();
    }
  });

  await stream.promises.pipeline(
    fs.createReadStream(filePath),
    writable
  );

  console.log(hash.digest('hex'));
};

await calculateHash();
