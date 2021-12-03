require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/config');

const app = express();

dbConnection()
  .then()
  .catch();

app.use(cors());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/product', require('./routes/product'));
app.use('/api/detail', require('./routes/detail'));
app.use('/api/bill', require('./routes/bill'));

app.listen(process.env.PORT, () => {
  console.log(`The sever is running in port ${process.env.PORT}`);
});
