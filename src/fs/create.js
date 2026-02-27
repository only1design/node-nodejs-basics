import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'fresh.txt');

const create = async () => {
  try {
    fs.writeFileSync(filePath, 'I am fresh and young', {flag: 'wx'});
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

await create();
