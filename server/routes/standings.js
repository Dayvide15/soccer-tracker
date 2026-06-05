const express = require("express");
const router = express.Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  try {
    const matches = await pool.query("SELECT * FROM matches");
    const teams = await pool.query("SELECT * FROM teams");

    const table = {};

    
    teams.rows.forEach(t => {
      table[t.name] = {
        team: t.name,
        played: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
      };
    });

    
    matches.rows.forEach(m => {
      const home = table[m.home_team];
      const away = table[m.away_team];

      if (!home || !away) return;

      home.played++;
      away.played++;

      if (m.home_score > m.away_score) {
        home.wins++;
        home.points += 3;
        away.losses++;
      } else if (m.home_score < m.away_score) {
        away.wins++;
        away.points += 3;
        home.losses++;
      } else {
        home.draws++;
        away.draws++;
        home.points += 1;
        away.points += 1;
      }
    });

    const result = Object.values(table).sort((a, b) => b.points - a.points);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;