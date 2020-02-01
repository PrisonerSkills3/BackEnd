const express = require("express");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("../auth/authRouter");

const server = express();

server.use(cors());
server.use(express.json());

server.use(
  session({
    name: "",
    secret: "",
    cookiue: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false
    },
    httpOnly: false,
    resave: false,
    saveUninitialized: false
  })
);

server.use("/api/auth", authRouter);

module.exports = server;
