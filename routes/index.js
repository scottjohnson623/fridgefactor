const express = require("express");
const router = express.Router();
const db = require("../db");

/* FIXME */

router.get("/stared", async function(req, res) {
  const notesData = await db.select().table("stared_recipes");
  res.send(notesData);
});

router.post("/stared", async function(req, res) {
    await db("stared_recipes").insert(req.body);
  });

router.get("/user/:id", async function(req, res) {
  const notesData = await db.select().table("user");
  notesData.filter((note) => note.id === id);
  res.send(notesData);
});



module.exports = router;