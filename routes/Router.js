const Auth = require('../middlewares/auth.js');

module.exports = function(app) {
  
  app.get('/login',   Auth.login); // Change me to post 
  app.get('/signup', Auth.signup); // Change me to post 
  app.get('/', (req, res) => {  // Delete Me 
    return  res.send('<h1 style="text-align:center;color:#000015;margin:48px;">Server is Running @ Client Browser</h1>');
  });
  
}
