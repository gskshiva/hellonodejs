const express = require('express');
const dotenv = require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from NodeJs Server');
});

app.listen(process.env.APP_PORT, () => {
  console.log(
    `NodeJs Server is running on http://localhost:${process.env.APP_PORT}`
  );
});
