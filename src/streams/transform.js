import stream from "node:stream";

const transform = async () => {
  const transformStream = new stream.Transform({
    transform(chunk, encoding, callback) {
      const transformedChunk = chunk.toString().split("").reverse().join("").concat("\n")

      callback(null, transformedChunk);
    },
  })

  await stream.promises.pipeline(
    process.stdin,
    transformStream,
    process.stdout,
  )
};

await transform();
