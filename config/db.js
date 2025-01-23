const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://aadilharis812:1234@jaruratcare.b6nyi.mongodb.net/?retryWrites=true&w=majority&appName=Jaruratcare');
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
