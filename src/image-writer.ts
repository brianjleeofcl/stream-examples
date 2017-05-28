import { createWriteStream } from 'fs';

const filepath = process.argv[2];

process.stdin.pipe(createWriteStream(filepath));