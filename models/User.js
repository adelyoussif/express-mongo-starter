const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a Schema
const userSchema = new Schema({

  email: { 
    type: String, 
  },
  password: { 
    type: String,
   }
  
});

// Create a Model 
const User = mongoose.model('user', userSchema);

module.exports = User;

