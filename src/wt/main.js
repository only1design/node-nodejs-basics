import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerPath = path.join(__dirname, 'worker.js');

const STATUS_RESOLVED = "resolved";
const STATUS_ERROR = "error";
const START_NUMBER = 10;

const runWorker = (workerData) =>
  new Promise((resolve) => {
    const worker = new Worker(workerPath, {workerData});

    worker.on('message', (data) => resolve({
      status: STATUS_RESOLVED,
      data,
    }));

    worker.on('error', () => resolve({
      status: STATUS_ERROR,
      data: null,
    }));

    worker.on('exit', (code) => {
      if (code !== 0) resolve({
        status: STATUS_ERROR,
        data: null,
      });
    });
  });

const performCalculations = async () => {
  const numCPUs = cpus().length;

  const results = await Promise.all(
    Array.from({length: numCPUs}, (_, i) => runWorker(START_NUMBER + i))
  );

  console.log(results)
};

await performCalculations();
