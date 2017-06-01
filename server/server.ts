import * as express from 'express';

const app: express.Express = express();

app.get('/', (req, res) => {
  res.send('Server listening');
})

app.post('/upload-image', (req, res, next) => {
  if (!req.is('image/*')) return res.sendStatus(400);
  const buffers: Buffer[] = [];
  req.on('data', (chunk: Buffer) => buffers.push(chunk)).on('end', () => {
    req.body = Buffer.concat(buffers).toString();
    res.send('Image accepted');
  })
});

const port: number = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;