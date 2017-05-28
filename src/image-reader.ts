import { createReadStream } from 'fs';

const path = process.argv[2];

createReadStream(path).pipe(process.stdout);