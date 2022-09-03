import express from 'express';

import connectToDatabase from './helpers.mjs';

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Hi there!</h2>');
});

await connectToDatabase();

app.listen(3000);

//docker run -p 3000:3000 sha256:b6508ef2034f30d5a2efde659384093e69058361c1d2309cb2d63d1ec05d02b3
//docker run -d -p 3000:3000 b6508ef2034f
