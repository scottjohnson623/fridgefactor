const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const dbRoutes = require("../routes");
const path = require("path");
const app = express();
const API_KEY = process.env.API_KEY;
import store from "../src/reducers/index"

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", dbRoutes);

app.use(express.static(path.resolve(__dirname, "..", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

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
  store.dispatch({ type: "SET_RECIPES", payload: getAllRecipes.data });
  res.send(getAllRecipes.data);
});

app.get("/recipes/:ingredients", async (req, res) => {
  const getFilteredRecipes = await axios({
    method: "GET",
    url: "https://recipe-puppy.p.rapidapi.com/",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      "x-rapidapi-key": API_KEY,
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

module.exports = app;
