require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(process.env.PORT, () => {
  console.log(`The sever is running in port ${process.env.PORT}`);
});
