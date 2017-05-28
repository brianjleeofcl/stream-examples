"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Server listening');
});
app.post('/upload-image', function (req, res, next) {
    if (!req.is('image/*'))
        return next(new Error('Unacceptable Content Type'));
    var buffers = [];
    req.on('data', function (chunk) { return buffers.push(chunk); }).on('end', function () {
        res.send('Image accepted');
    });
});
var port = process.env.port || 8000;
app.listen(port, function () {
    console.log("listening on port " + port);
});
exports["default"] = app;
