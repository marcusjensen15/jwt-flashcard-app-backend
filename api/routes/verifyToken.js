const jwt = require('jsonwebtoken');
const tokenSecret = require('../../tokenSecret');

auth = (req,res,next) => {

  const token = req.header('auth-token');

  if (!token) return res.status(401).send('Access Denied');

  //adds property to request object called user, sets it to 'verifed'.

  try {
    const verifed = jwt.verify(token, tokenSecret);
    req.user = verified;
  }
  catch (err) {
    res.status(400).send('Invalid Token');

  }

}
