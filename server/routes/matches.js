const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  const { home_team, away_team } = req.body;

  const result = await pool.query(
    "INSERT INTO matches (home_team, away_team) VALUES ($1, $2) RETURNING *",
    [home_team, away_team]
  );

  res.json(result.rows[0]);
});

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM matches");
  res.json(result.rows);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { home_score, away_score } = req.body;

  const result = await pool.query(
    "UPDATE matches SET home_score=$1, away_score=$2 WHERE id=$3 RETURNING *",
    [home_score, away_score, id]
  );

  res.json(result.rows[0]);
});

module.exports = router;