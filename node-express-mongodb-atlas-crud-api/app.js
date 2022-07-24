const express = require('express');
const app = express();

const tasks = require('./routes/tasks');
const connectDB = require('./db/connect.js');
const notFound = require('./middleware/not-found');
const errorHandlerMW = require('./middleware/error-handler');

require('dotenv').config();

//mws
app.use(express.json());
app.use(express.static('./public'));

app.use('/api/v1/tasks', tasks);

//routes
// app.get('/', (req, res) => {
//   return res.send('Task Manager App');
// });

//tüm yönlendirmelerden sonra, default hata sayfası :
app.use(notFound);
app.use(errorHandlerMW);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to DB');
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
