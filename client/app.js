const API = "http://localhost:3000";

async function loadTeams() {
  const res = await fetch(`${API}/teams`);
  const data = await res.json();

  const list = document.getElementById("teams");
  list.innerHTML = "";

  data.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t.name;
    list.appendChild(li);
  });
}

async function addTeam() {
  const name = document.getElementById("teamName").value;

  await fetch(`${API}/teams`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  loadTeams();
}

loadTeams();