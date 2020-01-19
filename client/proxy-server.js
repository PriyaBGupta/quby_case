const Bundler = require('parcel-bundler');
const express = require('express');
const proxy = require('http-proxy-middleware');

const app = express();
console.log("Proxy server is called");
app.use('/thermostat', proxy({
  target: 'http://localhost:9090'
}));

const bundler = new Bundler('src/index.html');
app.use(bundler.middleware());

app.listen(Number(process.env.PORT || 1234));