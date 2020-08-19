const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const API_KEY = process.env.API_KEY;
const passport = require("passport");
const cookieParser = require("cookie-parser");
const path = require("path");
const session = require("express-session");
const app = express();
const auth = require("./routes/auth");
const user = require("./routes/user");

app.use(express.static(path.join(__dirname, "..", "..", "client")));
app.use(cookieParser(process.env.SECRET_KEY));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", auth);
app.use("/user", user);

// recipes
app.get("/recipes", async (req, res) => {
  const getAllRecipes = await axios({
    method: "GET",
    url: "https://recipe-puppy.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
      useQueryString: true,
    },
  });
  res.send(getAllRecipes.data);
});

app.get("/recipes/:ingredients", async (req, res) => {
  const getFilteredRecipes = await axios({
    method: "GET",
    url: "https://recipe-puppy.p.rapidapi.com/",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
      useQueryString: true,
    },
    params: {
      p: "1",
      i: req.params.i,
      q: req.params.q,
    },
  });
  res.send(getFilteredRecipes.data);
});

// app.get("/user/receipes/", async (req, res) => {
//   db.select().table('made_recipes');
//   const getAllRecipes = await axios({
//     method: "GET",
//     url: "https://recipe-puppy.p.rapidapi.com/",
//     headers: {
//       "content-type": "application/json",
//       "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
//       "x-rapidapi-key": API_KEY,
//       useQueryString: true,
//     },
//   });
//   res.send(getAllRecipes.data);
// });

module.exports = app;
