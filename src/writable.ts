let count: number = 0;

let interval: NodeJS.Timer = setInterval(() => {
  if (count > 5) {
    // process.exit(0)
    clearInterval(interval)
  } else {

    process.stdout.write(`${count} \n`);
    count ++;
  }
}, 1000)
