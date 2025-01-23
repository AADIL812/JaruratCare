const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['Admin', 'User'], required: true },
});

// Export the model properly
module.exports = mongoose.model('Resource', ResourceSchema);

