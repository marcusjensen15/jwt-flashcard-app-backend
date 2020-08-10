const jwt = require('jsonwebtoken');
const tokenSecret = require('../../tokenSecret');

//we can add this function to any route that we want to be private (or protected)
//perhaps upon logout we can delete the 'verified' property.

module.exports = (req,res,next) => {

  const token = req.header('auth-token');

  if (!token) return res.status(401).send('Access Denied');

  //adds property to request object called user, sets it to 'verifed'. We are going to have access to req.user in all of our code.

  try {
    const verified = jwt.verify(token, tokenSecret.secret);
    req.user = verified;
    next();
  }
  catch (err) {
    res.status(400).send('Invalid Token');

  }

};
