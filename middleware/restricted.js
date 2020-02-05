const jwt = require("jsonwebtoken");
require("dotenv").config();

const jwSecret = process.env.JW_SECRET;

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  console.log("restricted", jwSecret);

  if (token) {
    jwt.verify(token, jwSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ err: "Bad authentication" });
      } else {
        req.user = { username: decodedToken.username };

        next();
      }
    });
  } else {
    res.status(401).json({ msg: "You are not logged in" });
  }
};
module.exports = restricted;
