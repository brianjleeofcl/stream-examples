process.stdin.on('readable', () => {
  console.log('readable!')
  let chunk: string | Buffer;
  while((chunk = process.stdin.read()) !== null) {
    // do something
    process.stdout.write(chunk)
  }
}).on('close', () => console.log('close!')).on('end', () => console.log('end!'))