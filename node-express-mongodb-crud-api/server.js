require('dotenv').config();
const { config } = require('dotenv');
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

db.on('error', (err) => console.log(error));
db.once('open', () => console.log('Connected to db'));

app.use(express.json());

const subsRouter = require('./routes/subscribers');
app.use('/subscribers', subsRouter);

app.listen(5001, () => console.log('Server started'));
