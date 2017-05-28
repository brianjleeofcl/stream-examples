import * as express from 'express';

const app: express.Express = express();

app.get('/', (req, res) => {
  res.send('Server listening');
})

app.post('/upload-image', (req, res, next) => {
  if (!req.is('image/*')) return next(new Error('Unacceptable Content Type'))
  const buffers: Buffer[] = [];
  req.on('data', (chunk: Buffer) => buffers.push(chunk)).on('end', () => {
    res.send('Image accepted');
  })
});

const port: number = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

export default app;