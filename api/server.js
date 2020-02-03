const express = require("express");
const cors = require("cors");
const session = require("express-session");

const authRouter = require("../auth/authRouter");
const prisonersRouter = require("../prisoners/prisonersRouter");

const server = express();

server.use(cors());
server.use(express.json());

server.use(
  session({
    name: "Lovely, Lovely Leavenworth",
    secret: "What's In The Box?",
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false
    },
    httpOnly: false,
    resave: false,
    saveUninitialized: false
  })
);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Prisoner Skills API" });
});

server.use("/api/auth", authRouter.router);
server.use("/api/prisons", prisonersRouter);
module.exports = server;
