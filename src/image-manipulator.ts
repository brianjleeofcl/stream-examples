import { subClass, SubClass } from 'gm';

const im: SubClass = subClass({imageMagick: true});

im(process.stdin).resize(500, 500).stream().pipe(process.stdout);