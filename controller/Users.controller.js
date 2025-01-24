const {getAllUsers,createUser,getUser,updateUser,deleteUser}=require('../models/Resource.model');


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
        // Create a test user
        const { name, email, role } = req.body;
        await createUser(name, email, role);
        res.status(201).send('User created successfully');
        console.log('User created successfully');
    } catch (error) {
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

module.exports={httpgetUser,httpgetAllUsers,httpcreateUser,httpupdateUser,httpdeleteUser};