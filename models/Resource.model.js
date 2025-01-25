const Resource = require('./Resource.mongo');
const bcrypt = require('bcrypt');
const saltRounds = 10;



// Function to create a new user
async function createUser(name, email, role,password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Creating user:', name, email, role);
    const newUser = new Resource({ name, email, role,password:hashedPassword });
    await newUser.save();
    console.log('User created successfully:', newUser);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error.message);
    throw error; // Re-throw the error for upstream handling
  }
}

// Function to get a user by ID
async function getUser(id) {
  try {
    const user = await Resource.findById(id);
    if (!user) {
      console.log('User not found');
      return null;
    }
    console.log('User found:', user);
    return user;
  } catch (error) {
    console.error('Error finding user:', error.message);
    throw error; // Re-throw the error for upstream handling
  }
}

// Function to get all users
async function getAllUsers() {
  try {
    const users = await Resource.find();
    console.log('All users:', users);
    return users;
  } catch (error) {
    console.error('Error finding users:', error.message);
    throw error; // Re-throw the error for upstream handling
  }
}

// Function to update a user by ID
async function updateUser(id, name, email, role) {
  try {
    const user = await Resource.findById(id);
    if (!user) {
      console.log('User not found');
      return null;
    }

    // Update the user's properties using the provided arguments
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;

    const updatedUser = await user.save();
    console.log('User updated:', updatedUser);
    return updatedUser;
  } catch (error) {
    console.error('Error updating user:', error.message);
    return null;
    throw error; // Re-throw the error for upstream handling
  }
}


// Function to delete a user by ID
async function deleteUser(id) {
  try {
    const user = await Resource.findByIdAndDelete(id);
    if (!user) {
      console.log('User not found');
      return null;
    }
    console.log('User deleted:', user);
    return user;
  } catch (error) {
    console.error('Error deleting user:', error.message);
    throw error; // Re-throw the error for upstream handling
  }
}

module.exports = {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser,
};


