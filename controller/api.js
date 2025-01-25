const {UserRouter}=require('./Users.router');
const express=require('express');
const api=express.Router();
api.use('/users',UserRouter);
api.get('/',async(req,res)=>{
    res.send('Welcome to API Router');
});

module.exports={api};
