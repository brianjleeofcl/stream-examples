import http from 'axios';

const url: string = process.argv[2];

http({
  method: 'POST',
  url,
  data: process.stdin
}).then().catch()