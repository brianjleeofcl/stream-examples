import { createReadStream } from 'fs';

const filepath: string = process.argv[2];

createReadStream(filepath).pipe(process.stdout);