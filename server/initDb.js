const pool = require("./db");

async function createTables() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS teams (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL
      );
    `);

    console.log("Teams table created");
  } catch (err) {
    console.log("Error creating tables", err);
  } finally {
    pool.end();
  }
}

createTables();