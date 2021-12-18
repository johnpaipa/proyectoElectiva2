require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/config');
const path = require("path");


//swagger
const swaggerUI = require("swagger-ui-express");
const swaggerjsDoc = require("swagger-jsdoc");

const swaggerSpec={
  definition:{
    openapi:"3.0.0",
    info:{
      title: "Node mongoDB API",
      version: "1.0.0"
    },

  },
  apis:[`${path.join(__dirname, "./routes/*.js")}`],
}


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
app.use('/api/client', require('./routes/client'));
app.use('/api-doc', swaggerUI.serve, swaggerUI.setup(swaggerjsDoc(swaggerSpec)))

app.listen(process.env.PORT || 8080, () => {
  console.log(`The sever is running in port ${process.env.PORT}`);
});
