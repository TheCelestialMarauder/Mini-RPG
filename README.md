<div align="center">

# 🛡️ Mini-RPG

A browser-based, turn-based combat game made in vanilla JavaScript as a personal learning project.

</div>

---

## 🎯 Project Overview

**Mini-RPG** is a turn-based combat game where the player must survive against waves of enemies. With each victory, you earn points and must choose between three unique items that can aid you in future battles.

This version introduces:

- **Inventory system** with 9 slots
- **Consumable items** with strategic effects
- **Reward selection** after defeating each enemy
- A polished, RPG-style UI built with **TailwindCSS**

---

## 🧠 Learning Goals

This project helps reinforce:

- Programming logic using combat mechanics
- JavaScript fundamentals (classes, conditionals, functions, modular code)
- Dynamic DOM manipulation and event handling
- Game state and flow control
- Separation of concerns using the MVC architecture
- Use of utility scripts (`utils/`) and reusable models

---

## 🕹️ How to Play

- Defeat all enemies one by one in turn-based combat
- Choose between **Attack**, **Defend**, or **Use Item**
- Each enemy has unique stats and cooldowns
- After each victory, pick 1 of 3 random items as a reward
- Items are **one-time-use** and can be:
  - Healing potions
  - Damage scrolls
  - Attack/Defense buffs
- Manage your **inventory (max 9 slots)** wisely
- Win by defeating all enemies. Lose if your health reaches 0

---

## 📁 Project Structure

```
mini-rpg/
├── index.html
├── README.md
├── /assets/              # UI assets, icons, etc.
├── /styles/              # TailwindCSS styles
│   └── main.css
├── /models/              # Player, Enemy, and Item classes
│   ├── player.js
│   ├── enemy.js
│   └── items.js
├── /controllers/         # Game logic modules
│   ├── gameController.js   # Main game flow
│   ├── attackToEnemy.js    # Player's attack logic
│   └── attackToPlayer.js   # Enemy's attack logic
├── /utils/               # Helper systems (item drops)
│   └── itemDrop.js         # Drop generation and UI rendering
├── /views/               # View layer updates
│   └── view.js             # Updates UI: health bars, score, logs, etc.
└── main.js              # Entry point, event listeners, state bindings
```

---

## ✅ Current Features

- ⚔️ Turn-based combat with cooldown mechanics
- 💾 Inventory system (9 slots, drag-and-click use)
- 🎁 Drop system with item selection
- 💡 Modular architecture (MVC-ish)
- 📜 Dynamic combat logs with autoscroll
- 🧪 Items with effects like healing, damage, buffs, and shields
- 🖼️ RPG-style interface (inspired by classic JRPGs)

---

## 🔮 Planned Features

- Persistent player progress via `localStorage`
- Boss encounters and enemy types with effects
- Advanced UI animations and damage indicators
- Character classes or abilities
- SFX / music support
- Victory and defeat screens

---

## 🧑‍💻 About the Developer

Project by:

**Zawar Naeem Shahzadi**

> Web & Game Development Student  
> Pixel art lover | RPG logic enthusiast  
> [GitHub Profile](https://github.com/TheCelestialMarauder)

---

## 💬 Feedback & Collaboration

Suggestions and contributions are welcome.  
Feel free to fork, test, or open an issue!

---
