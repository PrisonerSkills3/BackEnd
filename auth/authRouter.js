const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const restricted = require("../middleware/restricted");

const secret = "Fever When You Hold Me Tight";

const authModel = require("./authModel");

router.post("/register", (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 17);
  req.body.password = hash;

  // console.log(req.body);

  req.body.username && req.body.password
    ? authModel
        .addPrison(req.body)
        .then(usr => {
          console.log(usr);
          res.status(200).json({ message: "User successfully created" });
        })
        .catch(() =>
          res.status(401).json({ error: "User could not be created" })
        )
    : res.status(400).json({ error: "Username and password required" });
});

router.post("/login", (req, res) => {
  const generateToken = user => {
    const payload = {
      subject: user.id,
      username: user.username
    };

    const options = { expiresIn: "3hr" };

    return jwt.sign(payload, secret, options);
  };

  authModel
    .findPrisonBy(req.body.username)
    .then(usr => {
      console.log(usr);
      if (usr && bcrypt.compareSync(req.body.password, usr[0].password)) {
        req.session.user = req.body.username;
        console.log(req.session);
        const token = generateToken(usr);
        res
          .status(200)
          .json({ message: `Welcome, ${usr[0].username}!`, token: token });
      } else {
        res.status.apply(400).json({ error: "Invalid username/password" });
      }
    })
    .catch(() => {
      res.status(400).json({ error: "User could not be found" });
    });
});

router.post("/add-prisoner", restricted, (req, res) => {
  req.body.prisoner_name && req.body.prisoner_skills
    ? authModel
        .addPrisoner(req.body)
        .then(usr => {
          console.log("add", usr);
          res
            .status(200)
            .json({ message: "Prisoner profile successfully created" });
        })
        .catch(() =>
          res
            .status(401)
            .json({ error: "Prisoner profile could not be created" })
        )
    : res.status(400).json({ error: "Prisoner information required" });
});

router.put("/edit-prisoner/:id", restricted, (req, res) => {
  req.body.prisoner_name && req.body.prisoner_skills
    ? authModel
        .editPrisoner(req.body, req.params.id)
        .then(usr => {
          console.log(usr);
          res
            .status(200)
            .json({ message: "Prisoner profile successfully updated" });
        })
        .catch(() =>
          res
            .status(401)
            .json({ error: "Prisoner profile could not be updated" })
        )
    : res.status(400).json({ error: "Prisoner information required" });
});

router.delete("/delete-prisoner/:id", restricted, (req, res) => {
  authModel
    .deletePrisoner(req.params.id)
    .then(() =>
      res.status(200).json({ message: "Prisoner was successfully deleted" })
    )
    .catch(() =>
      res.status(400).json({ error: "Prisoner could not be deleted" })
    );
});

module.exports = {
  router,
  secret
};
