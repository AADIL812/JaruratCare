const {getAllUsers,createUser,getUser,updateUser,deleteUser}=require('../models/Resource.model');
const Resource = require('../models/Resource.mongo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
async function httploginUser(req, res) {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
      }
  
      // Find user by email in the database
      const user = await Resource.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: 'Invalid email' });
      }
  
      // Debug: Log user found in database
      //console.log('User found:', user);
  
      // Compare provided password with hashed password in the database
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
      }
  
      const token = jwt.sign(
        { id: user._id, role: user.role },
         'your_jwt_secret', 
        { expiresIn: '1h' }
      );
  
      // Send success response with the token and user details
      res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      // Handle errors and send a proper response
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
async function httpgetAllUsers(req,res)
{
    try {
        // Find all users
        const users = await getAllUsers();
        res.status(200).json(users);
        console.log('All users:', users);
    } catch (error) {
        console.error('Error finding users:', error.message);
        res.status(500).send(error.message);
    }
}

async function httpcreateUser(req,res)
{
    try {
        console.log(req.body);
        const { name, email, role,password } = req.body;
        console.log('Creating user:', name, email, role);
        await createUser(name, email, role,password);
        res.status(201).send('User created successfully');
        console.log('User created successfully');
    } catch (error) {
        console.log(req.body);
        console.error('Error creating user:', error.message);
        res.status(500).send(error.message);
    }
}

async function httpgetUser(req,res)
{
    try{
        // Find the user by ID
        const user = await getUser(req.params.id);
        console.log('User found:', user);
        res.status(200).json(user);
        return user;
    }catch(error){
        console.error('Error finding user:', error.message);
        res.status(500).send(error.message);
    }
}
async function httpupdateUser(req,res)
{
    try{
        // Update the user
        const {id, name, email, role } = req.body;
        const updatedUser = await updateUser(id, name, email, role);
        console.log('User updated:', updatedUser);
        res.status(200).json(updatedUser);
        return updatedUser;
    }catch(error){
        console.error('Error updating user:', error.message);
        res.status(500).send(error.message);
    }
}
async function httpdeleteUser(req,res)
{
    try{
        // Delete the user
        const user= await deleteUser(req.params.id);
        console.log('User deleted',user);
        res.status(200).json(user);
    }catch(error){
        console.error('Error deleting user:', error.message);
        res.status(500).send(error.message);
    }
}

module.exports={httpgetUser,httpgetAllUsers,httpcreateUser,httpupdateUser,httpdeleteUser,httploginUser};