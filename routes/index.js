const express = require("express");
const router = express.Router();
const db = require("../db");

/* FIXME */

router.get("/starred", async function(req, res) {
    const starredRecipeData = await db.select().table("starred_recipes");
    res.send(starredRecipeData);
});

router.post("/starred", async function(req, res) {
    await db("starred_recipes").insert(req.body);
    res.send("You have starred a recipe!");
});

router.get("/made", async function(req, res) {
    const madeRecipeData = await db.select().table("made_recipes");
    res.send(madeRecipeData);
});

router.post("/made", async function(req, res) {
    await db("made_recipes").insert(req.body);
    res.send("You have made a recipe!");
});



module.exports = router;