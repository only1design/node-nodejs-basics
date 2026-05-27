import worker from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  // if (Math.random() < 0.5) throw Error('Test error');

  const result = nthFibonacci(worker.workerData)

  worker.parentPort.postMessage(result)
};

sendResult();
