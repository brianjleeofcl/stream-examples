const gm = require('gm').subClass({imageMagick: true});

gm(process.stdin).resize(400, 400).stream().pipe(process.stdout);