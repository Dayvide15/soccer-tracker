Soccer Tracker

A full-stack soccer tracking application that manages teams and automatically calculates league standings based on match results.

Current Features
Add teams
View all teams
Automatic league standings calculation
Wins / Draws / Losses tracking
Points system (3-1-0 rules)
Full-stack integration (frontend + backend + PostgreSQL)
Tech Stack
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: PostgreSQL
API: RESTful API
Features Overview
Teams
Add and display teams
Stored in PostgreSQL database
Standings

Automatically calculated from match data:

Played
Wins
Draws
Losses
Points
Project Structure
soccer-tracker/
│
├── server/
│   ├── index.js
│   ├── db.js
│   └── routes/
│       ├── teams.js
│       ├── matches.js
│       └── standings.js
│
├── client/
│   ├── index.html
│   └── app.js
│
├── .env
└── package.json
Setup Instructions
Install dependencies
npm install
Setup PostgreSQL database

Create a database:

soccer_tracker

Add to .env:

DATABASE_URL=postgresql://postgres:1234@localhost:5432/soccer_tracker
Run backend server
node server/index.js

Server runs on:

http://localhost:3000
Run frontend

Open:

client/index.html

Or use Live Server:

http://localhost:8080
API Endpoints
Teams
GET /teams → Get all teams
POST /teams → Add a team
Matches
GET /matches → Get matches
POST /matches → Add match
Standings
GET /standings → Get league table
Example Standings Response
[
  {
    "team": "Barcelona",
    "played": 1,
    "wins": 1,
    "draws": 0,
    "losses": 0,
    "points": 3
  }
]
Project Purpose

This project demonstrates:

Full-stack development
REST API design
Database integration
Business logic implementation
Frontend-backend communication
