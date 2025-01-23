const {UserRouter}=require('./Users.router');
const express=require('express');
const api=express.Router();

api.use('/',UserRouter);

module.exports=api;
