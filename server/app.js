const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const dbRoutes = require("../routes");
const path = require("path");
const app = express();
const API_KEY = process.env.API_KEY;
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const auth = require("./routes/auth");
const user = require("./routes/user");
const db = require("../db");

app.use(cookieParser(process.env.SECRET_KEY));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "..", "build")));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

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
app.use("/api", dbRoutes);

// recipes
app.get("/recipes", async (req, res) => {
  const getAllRecipes = await axios({
    method: "GET",
    url: "https://recipe-puppy.p.rapidapi.com/",
    headers: {
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
      useQueryString: true,
    },
  });
  res.send(getAllRecipes.data);
});

app.get("/recipes/:i/:q", async (req, res) => {
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

app.get("/user/recipes/", async (req, res) => {
  const madeRecipes = await db
    .select()
    .table("made_recipes")
    .where({ user_id: req.user.id });
  const staredRecipes = await db
    .select()
    .table("stared_recipes")
    .where({ user_id: req.user.id });
  const recipes = { madeRecipes, staredRecipes };
  res.send(recipes);
});

//share recipes by email
app.post("user/recipe/share", async (req, res) => {
  await axios({
    method: "POST",
    url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "rapidprod-sendgrid-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.API_KEY,
      accept: "application/json",
      useQueryString: true,
    },
    data: {
      personalizations: [
        {
          to: [
            {
              email: req.body.personalizations[0].to[0].email,
            },
          ],
          subject: req.body.personalizations[0].subject,
        },
      ],
      from: {
        email: req.body.from.email,
      },
      content: [
        {
          type: req.body.content[0].type,
          value: req.body.content[0].value,
        },
      ],
    },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("you suck");
    });
});

//adding starred and made recipes
app.post("/made-recipes", async (req, res) => {
  await db("made_recipes").insert({
    user_id: req.user.id,
    title: req.body.title,
    href: req.body.href,
    ingredients: req.body.ingredients,
    thumbnail: req.body.thumbnail,
  });
  res.sendStatus(200);
});

app.post("/starred-recipes", async (req, res) => {
  await db("starred_recipes").insert({
    user_id: req.user.id,
    title: req.body.title,
    href: req.body.href,
    ingredients: req.body.ingredients,
    thumbnail: req.body.thumbnail,
  });
  res.sendStatus(200);
});

module.exports = app;
