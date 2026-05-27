const PREFIX = '--';


const parseArgs = () => {
  const args = process.argv.slice(2).reduce((acc, value, index, array) => {
    if (value.startsWith(PREFIX) && array.length > index + 2) {
      acc.push(`${value.replace(PREFIX, "")} value is ${array[index + 1]}`);
    }

    return acc;
  }, [])

  console.log(args.join(', '));
};

parseArgs();
