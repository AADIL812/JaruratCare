// utils/createUser.js
const Resource = require('./Resource.mongo');

async function createUser(name, email, role) {
  try {
    // Create an instance of the Resource model
    const newUser = new Resource({ name, email, role });
    
    // Save the user to the database
    await newUser.save();

    console.log('User created successfully:', newUser);
  } catch (error) {
    console.error('Error creating user:', error.message);
  }
}

module.exports = createUser;

