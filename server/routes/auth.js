const express = require("express");
const router = express.Router();

const authHelpers = require("../auth/_helpers");
const passport = require("../auth/local");

router.post("/register", authHelpers.loginRedirect, (req, res, next) => {
  return authHelpers
    .createUser(req, res)
    .then((response) => {
      passport.authenticate("local", (err, user, info) => {
        if (user) {
          handleResponse(res, 200, "success");
        }
      })(req, res, next);
    })
    .catch((err) => {
      handleResponse(res, 500, "error");
    });
});

router.post("/login", authHelpers.loginRedirect, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return handleResponse(res, 500, "error");
    }
    if (!user) {
      return handleResponse(res, 404, "User not found");
    }
    if (user) {
      req.logIn(user, function (err) {
        if (err) {
          return handleResponse(res, 500, "error");
        }
        return handleResponse(res, 200, "success");
      });
    }
  })(req, res, next);
});

router.get("/logout", authHelpers.loginRequired, (req, res, next) => {
  req.logout();
  handleResponse(res, 200, "success");
});

//helper functions

function handleResponse(res, code, statusMsg) {
  res.status(code).json({ status: statusMsg });
}

module.exports = router;
