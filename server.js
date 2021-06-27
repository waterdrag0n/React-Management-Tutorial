const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const conf = JSON.parse(fs.readFileSync('./database.json'));
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

app.get('/api/customers', (req, res)=>{
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields)=>{
        res.send(rows);
      }
    )
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));