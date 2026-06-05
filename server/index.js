const express = require("express");

const app = express();
app.use(express.json());

const teamsRoutes = require("./routes/teams");
const matchesRoutes = require("./routes/matches");

app.get("/", (req, res) => {
  res.send("Soccer Tracker API running ⚽");
});

app.use("/teams", teamsRoutes);
app.use("/matches", matchesRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});