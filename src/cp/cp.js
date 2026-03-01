import { fork } from 'node:child_process';
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  fork(filePath, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
// spawnChildProcess([1, 2, 3, 4]);

