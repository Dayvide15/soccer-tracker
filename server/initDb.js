const pool = require("./db");

async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS teams (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS matches (
        id SERIAL PRIMARY KEY,
        home_team VARCHAR(100),
        away_team VARCHAR(100),
        home_score INT DEFAULT 0,
        away_score INT DEFAULT 0,
        match_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Tables created");
  } catch (err) {
    console.log("Error creating tables", err);
  } finally {
    pool.end();
  }
}

createTables();