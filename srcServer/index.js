import express from 'express';

const app = express();

app.listen(3002, (err) => {
  if (err) {
    return console.log('Error', err);
  }
});
