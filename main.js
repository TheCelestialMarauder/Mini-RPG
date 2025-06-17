// DOM Elements
const playerLifeSpan = document.getElementById('playerLife');
const playerNameSpan = document.getElementById('playerName');
const enemyLifeSpan = document.getElementById('enemyLife');
const enemyNameSpan = document.getElementById('enemyName');
const enemyCooldownSpan = document.getElementById('enemyCooldown');
const playerHealthBar = document.getElementById('playerHealthBar');
const enemyHealthBar = document.getElementById('enemyHealthBar');
const logsContainer = document.getElementById('logs');
const playerScoreSpan = document.getElementById('playerScore');

// Game Logic
import { startGame, playerTurnAttack, playerTurnDefend, getCurrentEnemyCooldown } from './controllers/gameController.js';

// Start the game
startGame();

// Button Events
document.getElementById('attackBtn').addEventListener('click', () => {
  playerTurnAttack();
  updateEnemyCooldown(getCurrentEnemyCooldown());
});

document.getElementById('defendBtn').addEventListener('click', () => {
  playerTurnDefend();
  updateEnemyCooldown(getCurrentEnemyCooldown());
});

// Update player's life on screen
export function updatePlayerLife(life, maxLife = 100) {
  playerLifeSpan.textContent = life;
  const percentage = Math.max(0, (life / maxLife) * 100);
  playerHealthBar.style.width = `${percentage}%`;
}

// Update enemy's life and name on screen
export function updateEnemyLifeAndName(name, life, maxLife = 100, cooldown = 0) {
  enemyNameSpan.textContent = name;
  enemyLifeSpan.textContent = life;
  enemyCooldownSpan.textContent = cooldown;
  const percentage = Math.max(0, (life / maxLife) * 100);
  enemyHealthBar.style.width = `${percentage}%`;
}

// Refresh cooldown display only
export function updateEnemyCooldown(cooldown) {
  enemyCooldownSpan.textContent = cooldown;
}

// Add a log message to the combat log
export function addLog(message, type = 'neutral') {
  const logEntry = document.createElement('div');
  logEntry.textContent = message;

  // Style by type
  if (type === 'player') {
    logEntry.classList.add('text-green-400');
  } else if (type === 'enemy') {
    logEntry.classList.add('text-red-400');
  } else {
    logEntry.classList.add('text-white');
  }

  logsContainer.appendChild(logEntry);

  // Scroll to bottom after slight delay to ensure rendering
  setTimeout(() => {
    logsContainer.scrollTop = logsContainer.scrollHeight;
  }, 50);
}

// Update player name
export function updatePlayerName(name) {
  playerNameSpan.textContent = name;
}

// Update score
export function updatePlayerScore(score) {
  playerScoreSpan.textContent = score;
}