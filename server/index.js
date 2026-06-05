const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Soccer Tracker API running ⚽");
});

// TEAMS
app.post("/teams", async (req, res) => {
  const { name } = req.body;

  const result = await pool.query(
    "INSERT INTO teams (name) VALUES ($1) RETURNING *",
    [name]
  );

  res.json(result.rows[0]);
});

app.get("/teams", async (req, res) => {
  const result = await pool.query("SELECT * FROM teams");
  res.json(result.rows);
});

// MATCHES
app.post("/matches", async (req, res) => {
  const { home_team, away_team } = req.body;

  const result = await pool.query(
    "INSERT INTO matches (home_team, away_team) VALUES ($1, $2) RETURNING *",
    [home_team, away_team]
  );

  res.json(result.rows[0]);
});

app.get("/matches", async (req, res) => {
  const result = await pool.query("SELECT * FROM matches");
  res.json(result.rows);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});