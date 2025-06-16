import { startGame, playerTurnAttack, playerTurnDefend } from './controllers/gameController.js';

// Event listeners for player actions
document.getElementById('attack-button').addEventListener('click', playerTurnAttack);
document.getElementById('defend-button').addEventListener('click', playerTurnDefend);

// Global function to show logs in the log box
export function addLog(message) {
  const logBox = document.getElementById('log-box');
  const p = document.createElement('p');
  p.textContent = message;
  logBox.appendChild(p);
  logBox.scrollTop = logBox.scrollHeight;
}

// Global function to update player life
export function updatePlayerLife(life) {
  document.getElementById('player-life').textContent = life;
}

// Execute on load
startGame();