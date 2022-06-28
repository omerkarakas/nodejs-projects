import express from 'express';
///const express = require('express');

import bodyParser from 'body-parser';
import usersRoutes, { USERS_ROUTER_BASE } from './routes/users.js';

const app = express();
const PORT = 5001;

app.use(bodyParser.json());

app.use(USERS_ROUTER_BASE, usersRoutes);

app.get('/', (req, res) => {
  // console.log('[WORKING]');
  res.send('Hello from homepage!!!');
});

app.listen(PORT, () =>
  console.log(`Server running on http://locahost:${PORT}`)
);
