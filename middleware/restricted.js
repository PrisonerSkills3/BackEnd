const jwt = require('jsonwebtoken');

const  jwtSecret  = process.env.SECRET;

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        
        res.status(401).json({ err: "Bad authentication "})
      } else {
        req.user = { username: decodedToken.username };

        next();
      }
    })
  } else {

    res.status(401).json({ msg: 'You are not loged in' });
  }

};