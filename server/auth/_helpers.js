const bcrypt = require("bcryptjs");
const db = require("../../db");

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

async function createUser(req) {
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(req.body.password, salt);
  try {
    return db("user").returning("*").insert({
      username: req.body.username,
      password: hash,
    });
  } catch (err) {
    throw err;
  }
}

function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({ status: "Please log in" });
  return next();
}

function adminRequired(req, res, next) {
  if (!req.user) res.status(401).json({ status: "Please log in" });
  return db("user")
    .where({ username: req.user.username })
    .first()
    .then((user) => {
      if (!user.admin)
        res.status(401).json({ status: "You are not authorized" });
      return next();
    })
    .catch((err) => {
      res.status(500).json({ status: "Something bad happened" });
    });
}

function loginRedirect(req, res, next) {
  if (req.user)
    return res.status(401).json({ status: "You are already logged in" });
  return next();
}

function handleErrors(req) {
  return new Promise((resolve, reject) => {
    if (req.body.username.length < 6) {
      reject({
        message: "Username must be longer than 6 characters",
      });
    } else if (req.body.password.length < 6) {
      reject({
        message: "Password must be longer than 6 characters",
      });
    } else {
      resolve();
    }
  });
}

module.exports = {
  comparePass,
  createUser,
  loginRequired,
  adminRequired,
  loginRedirect,
  handleErrors,
};
