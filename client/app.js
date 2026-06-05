const API = "http://localhost:3000";

async function loadTeams() {
  try {
    const res = await fetch(`${API}/teams`);
    const data = await res.json();

    const list = document.getElementById("teams");
    list.innerHTML = "";

    data.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t.name;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading teams:", err);
  }
}

async function loadStandings() {
  try {
    const res = await fetch(`${API}/standings`);
    const data = await res.json();

    const list = document.getElementById("standings");
    list.innerHTML = "";

    data.forEach(t => {
      const li = document.createElement("li");
      li.textContent = `${t.team} - ${t.points} pts (W:${t.wins} D:${t.draws} L:${t.losses})`;
      list.appendChild(li);
    });
  } catch (err) {
    console.error("Error loading standings:", err);
  }
}

async function addTeam() {
  const name = document.getElementById("teamName").value;

  if (!name) return;

  try {
    await fetch(`${API}/teams`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name })
    });

    document.getElementById("teamName").value = "";

    loadTeams();
    loadStandings();
  } catch (err) {
    console.error("Error adding team:", err);
  }
}


loadTeams();
loadStandings();