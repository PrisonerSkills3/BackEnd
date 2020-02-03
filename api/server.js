const express = require("express");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("../auth/authRouter");

const server = express();

server.use(cors());
server.use(express.json());

server.use(
  session({
    name: "Lovely, Lovely Leavenworth",
    secret: "What's In The Box?",
    cookiue: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false
    },
    httpOnly: false,
    resave: false,
    saveUninitialized: false
  })
);

server.use("/", (req, res) => {
  res.status(200).json({ message: "Prisoner Skills API" });
});

server.use("/api/auth", authRouter);

module.exports = server;
