const {UserRouter}=require('./Users.router');
const express=require('express');
const api=express.Router();
api.use('/',async (req,res)=>{
    res.send('Welcome to the API');
});
api.use('/users',UserRouter);

module.exports={api};
