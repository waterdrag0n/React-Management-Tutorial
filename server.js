const express = require('express');
const bodyParser = require('body-parser');
const app= express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res)=>{
    res.send([
        {
            'id':1,
            'image':'https://placeimg.com/64/64/any',
            'name':'홍길동',
            'birthday':'010101',
            'gender':'M',
            'job':'학생'
          },
          {
            'id':2,
            'image':'https://placeimg.com/64/64/any',
            'name':'ㄱㄴㄷ',
            'birthday':'020202',
            'gender':'M',
            'job':'개발자'
          },
          {
            'id':3,
            'image':'https://placeimg.com/64/64/any',
            'name':'ㅁㅂㅅ',
            'birthday':'030303',
            'gender':'F',
            'job':'학생'
          }
    ]);
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));