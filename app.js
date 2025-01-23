const express=require('express');
const app=express();
const {api}=require('./controller/api');
app.get('/',api);

module.exports= app;
