const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
// const apiKeys = ["6ea8312a8a85ea08a00a765a92332962"];

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/recipes", async (req, res) => {
  const getAllRecipes = await axios({
    method: "GET",
    url: "https://recipe-puppy.p.rapidapi.com/",
    headers: {
      "content-type": "application/json",
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      "x-rapidapi-key": "864056cb7emshf88c3bd2ebe5cb9p1f9b82jsnc3709f7fc474",
      useQueryString: true,
    },
  });
  res.send(getAllRecipes.data);
});

module.exports = app;
