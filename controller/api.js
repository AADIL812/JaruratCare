const {UserRouter}=require('./Users.router');
const express=require('express');
const api=express.Router();

api.use('/users',UserRouter);

module.exports={api};
