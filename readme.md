# Stream examples

## Installation

This repository requires Node.js and ImageMagick. Both can be installed via HomeBrew on MacOS or APT on Linux.

Install dependencies with `npm install` or `yarn`.

Transpile using `./tsc`

## description of each file in `/src`

#### `flowing-mode-reading`
Demonstrates flowing mode of `readableStream`, which is read using the `data` event.

#### `paused-mode-reading`
Demonstrates paused mode of `readableStream`, data is read using `.read()` method while the `readable` event is fired.

#### `writable`
Demonstrates writing to a `writableStream` using the `.write(stringData)` method.

#### `image-reader`
Reads from a file system read stream and pipes to `stdout`

#### `image-manipulator`
Reads from `stdin`, pipes to `gm`(imageMagick) and streams result to `stdout`

#### `image-writer`
Reads from `stdin`, pipes to file system write stream.

## examples

```bash
$ node transpiled/image-reader sample.jpg | node transpiled/image-manipulator | node transpiled/image-writer result.jpg

$ curl 'http://url.to.image/img.jpg' | node transpiled/image-manipulator | node transpiled/image-writer result.jpg

$ node transpiled/image-reader sample.jpg | node transpiled/image-manipulator | curl -X POST -H "Content-Type: image/jpeg" -d @- "http://url.to.server/api"
```
