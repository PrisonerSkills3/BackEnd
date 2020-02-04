const jwt = require("jsonwebtoken");

const secret = "Fever When You Hold Me Tight";

const restricted = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
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
