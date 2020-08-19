const express = require("express");
const router = express.Router();
const db = require("../db");
import store from "../src/reducers/index"

/* FIXME */

router.get("/starred", async function(req, res) {
    const starredRecipeData = await db.select().table("starred_recipes");
    store.dispatch({ type: "SET_STARRED", payload: starredRecipeData });
    res.send(starredRecipeData);
});

router.post("/starred", async function(req, res) {
    await db("starred_recipes").insert(req.body);
    res.send("You have starred a recipe!");
});

router.get("/made", async function(req, res) {
    const madeRecipeData = await db.select().table("made_recipes");
    store.dispatch({ type: "SET_MADE", payload: madeRecipeData });
    res.send(madeRecipeData);
});

router.post("/made", async function(req, res) {
    await db("made_recipes").insert(req.body);
    res.send("You have made a recipe!");
});



module.exports = router;