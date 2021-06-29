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

//multer: 이름 안겹치게
const multer = require('multer');
const upload = multer({dest: './upload'});

app.get('/api/customers', (req, res)=>{
    connection.query(
      "SELECT * FROM CUSTOMER",
      (err, rows, fields)=>{
        res.send(rows);
      }
    )
});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
  let image = 'http://localhost:5000/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  
  connection.query(sql, params,
    (err, rows, fields)=>{
      res.send(rows);
      console.log(rows);
      console.log(err);
    }
  );
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));