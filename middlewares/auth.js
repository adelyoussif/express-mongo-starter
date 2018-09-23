// const User = require('../models/User');

// Login Auth 
const login = (req, res, next) => {
  console.log(`Login: You are just hit me`);
  next();
};
 
// Signup Auth 
const signup = (req, res, next) => {
  console.log(`Signup: You are just hit me`);
  next();
};

module.exports = {
  login,
  signup
}
