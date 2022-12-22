const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Evelash4482519',
  database : 'storefront'
});


connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection))
  .use(express.json())
  .use(express.urlencoded( {extended: true }));

app.get("/", (req,res) => {
  res.json({message:"Testing"});
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
