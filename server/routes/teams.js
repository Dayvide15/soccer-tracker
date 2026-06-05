const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  const { name } = req.body;

  const result = await pool.query(
    "INSERT INTO teams (name) VALUES ($1) RETURNING *",
    [name]
  );

  res.json(result.rows[0]);
});

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM teams");
  res.json(result.rows);
});

module.exports = router;