const express = require("express");
const router = express.Router();

const authHelpers = require("../auth/_helpers");
const passport = require("../auth/local");

router.post("/register", authHelpers.loginRedirect, (req, res, next) => {
  return authHelpers
    .createUser(req, res)
    .then((response) => {
      console.log(response);
      passport.authenticate("local", (err, user, info) => {
<<<<<<< HEAD
        console.log("authenticate", response);
        console.log(err, user, info);
        if (user) {
          console.log(user);
=======
        console.log(response);
        console.log(response.username);
        if (user) {
          console.log("this is user", user);
          console.log("this is user.username", user.username);
          console.log("this is respone", response);
>>>>>>> 22457592961a50d8b1ea1ae9d8dd58a372df26d0
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
