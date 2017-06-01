process.stdin.on('data', (data: string | Buffer) => {
  // do something
  process.stdout.write(data)
});