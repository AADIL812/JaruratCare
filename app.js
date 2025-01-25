const express=require('express');
const app=express();
const {api}=require('./controller/api');
app.use(express.json());
app.use('/',api);
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });
module.exports= app;
