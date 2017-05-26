import { join } from 'path';
import { createReadStream } from 'fs';

createReadStream(join(__dirname, '..', 'sample.jpg'), 'base64').pipe(process.stdout)