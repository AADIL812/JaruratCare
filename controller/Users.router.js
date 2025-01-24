const express=require('express');

const UserRouter=express.Router();

const {httpgetAllUsers,httpcreateUser,httpgetUser,httpupdateUser,httpdeleteUser}=require('../controller/Users.controller');
UserRouter.get('/',async(req,res)=>{
    res.send('Welcome to User Router');
});
UserRouter.get('/getall',httpgetAllUsers);
UserRouter.post('/create',httpcreateUser);
UserRouter.get('/get/:id',httpgetUser);
UserRouter.put('/update/:id',httpupdateUser);
UserRouter.delete('/delete/:id',httpdeleteUser);

module.exports={UserRouter};