import { createWriteStream } from 'fs';

const filepath: string = process.argv[2];

process.stdin.pipe(createWriteStream(filepath));