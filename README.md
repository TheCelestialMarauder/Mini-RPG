<div align="center">

# 🛡️ Mini-RPG

A small turn-based combat game made with vanilla JavaScript as a personal learning project.

</div>

---

## 🎯 Project Overview

**Mini-RPG** is a browser-based game where the player must defeat 10 enemies in sequential turn-based combat. This project is designed to improve my JavaScript skills, reinforce programming logic, and apply the MVC architecture in a practical, game-oriented context.

This is the **first version** of the game. Future iterations may include features such as persistent scores, a database connection, level progression, and a full skill system.

---

## 🧠 Learning Goals

This project helps reinforce:

- Programming logic using combat mechanics
- JavaScript fundamentals (functions, objects, arrays, DOM, events)
- Separation of concerns using the MVC pattern
- Web structure and project modularity

---

## 🕹️ How to Play

- You control a hero with attack, defense and health points.
- Each turn, you choose an action: **Attack**, **Defend**, etc.
- The enemy responds automatically.
- Defeat 10 enemies in a row to win the game.
- If your health reaches 0, it's game over.

---

## 📁 Project Structure

```
mini-rpg/
├── index.html
├── README.md
├── planning.md
├── /styles/
│   └── main.css
├── /models/
│   ├── player.js
│   ├── enemy.js
│   └── battle.js
├── /views/
│   └── view.js
├── /controllers/
│   └── gameController.js
└── /assets/
```

---

## ✅ Current Features

- Turn-based combat system
- Enemy rotation until player defeats 10
- Modular MVC architecture
- Simple and clean UI

---

## 🔮 Future Roadmap

- Add level-based progression with buffs
- Implement game state saving (via `localStorage`)
- Skill and item system
- Enemy AI with special effects
- Database-connected leaderboard

---

## 🧑‍💻 About the Developer

This project is built and maintained by:

**Zawar Naeem Shahzadi**

> Web & Game Development Student  
> Pixel art lover, RPG design enthusiast  
> [GitHub Profile](https://github.com/TheCelestialMarauder)

---

## 💬 Feedback & Collaboration

Feel free to fork, contribute or reach out with suggestions. This project is open to future collaboration and feedback from other developers and learners.
