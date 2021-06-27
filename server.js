const express = require('express');
const bodyParser = require('body-parser');
//import bodyParser;
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res)=>{
    res.send([
        {
          'id':1,
          'image':'https://placeimg.com/64/64/1',
          'name':'A',
          'birthday':'123456',
          'gender':'남자',
          'job':'개발자'
        },
        {
          'id':2,
          'image':'https://placeimg.com/64/64/2',
          'name':'B',
          'birthday':'234567',
          'gender':'여자',
          'job':'대학생'
        },
        {
          'id':3,
          'image':'https://placeimg.com/64/64/3',
          'name':'C',
          'birthday':'345678',
          'gender':'남자',
          'job':'백수'
        }
      ]);
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));