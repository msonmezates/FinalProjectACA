const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

app.get('/', function (req, res) {
  return res.json({ hello: 'world' });
});

app.post('/', function(req, res) {
  return res.json({ hello: 'post world' });
});

app.listen(port, function () {
  console.log(`Listening on port: ${port}`)
});
