const express=require('express');

const UserRouter=express.Router();

const {httpgetAllUsers,httpcreateUser,httpgetUser,httpupdateUser,httpdeleteUser,httploginUser}=require('../controller/Users.controller');

const authenticate=require('../middleware/auth');
const validateRole=require('../middleware/role');
const validateResource=require('../middleware/validateResource');
UserRouter.get('/',async(req,res)=>{
    res.send('Welcome to User Router');
});
UserRouter.post('/login', httploginUser);
UserRouter.get('/getall', authenticate,httpgetAllUsers);
UserRouter.post('/create',authenticate,validateRole('Admin'),validateResource,httpcreateUser);
UserRouter.get('/get/:id',authenticate,httpgetUser);
UserRouter.put('/update/:id',authenticate, validateRole('Admin'), validateResource,httpupdateUser);
UserRouter.delete('/delete/:id',authenticate, validateRole('Admin'),httpdeleteUser);

module.exports={UserRouter};