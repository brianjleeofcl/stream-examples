import { subClass } from 'gm';

const im = subClass({imageMagick: true});

im(process.stdin).resize(500, 500).stream().pipe(process.stdout)