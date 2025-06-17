// Imports
import { Player } from '../models/player.js';
import { enemies } from '../models/enemy.js';
import { attackToEnemy } from './attackToEnemy.js';
import { attackToPlayer } from './attackToPlayer.js';
import { addLog, updatePlayerLife, updateEnemyLifeAndName, updatePlayerScore } from '../main.js';

// Global variables
let currentEnemyIndex = 0;
let currentEnemy = null;
let gameOver = false;
let shuffledEnemies = [];

// Initialize enemies with cooldowns
export function initializeEnemies() {
    enemies.forEach(enemy => {
        // Set initial cooldown based on attack power
        enemy.attackCooldown = Math.floor(enemy.attackPower / 10);
        if (enemy.attackCooldown < 1) {
            enemy.attackCooldown = 0;
        }
        enemy.currentCooldown = 0;
    });
    console.log("Enemies initialized with cooldowns.");
}

// Shuffle enemies for random order
function shuffleEnemies(enemies) {
    return enemies.sort(() => Math.random() - 0.5);
}

// Start the game
export function startGame() {
    console.log("Game started!");
    addLog("Game started!", "player");
    addLog(`Player: ${Player.name}, Life: ${Player.life}`, "player");
    updatePlayerLife(Player.life, Player.maxLife);

    initializeEnemies();
    shuffledEnemies = shuffleEnemies([...enemies]);
    currentEnemy = shuffledEnemies[currentEnemyIndex];
    addLog(`First enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`, "enemy");
    updateEnemyLifeAndName(currentEnemy.name, currentEnemy.life, currentEnemy.maxLife);
}

// Player chooses to attack
export function playerTurnAttack() {
    if (gameOver) return;

    const enemyAlive = attackToEnemy(Player, currentEnemy);
    updatePlayerLife(Player.life, Player.maxLife);

    if (!enemyAlive) {
        const scoreGained = currentEnemy.maxLife || currentEnemy.life;
        Player.score += scoreGained;
        updatePlayerScore(Player.score);

        currentEnemyIndex++;

        if (currentEnemyIndex >= shuffledEnemies.length) {
            addLog("You win! All enemies defeated.", "player");
            gameOver = true;
            return;
        }

        addLog(`${currentEnemy.name} defeated!`, "player");
        currentEnemy = shuffledEnemies[currentEnemyIndex];
        addLog(`Next enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`, "enemy");
        updateEnemyLifeAndName(currentEnemy.name, currentEnemy.life, currentEnemy.maxLife);
    }

    enemyTurn();
}

// Player chooses to defend
export function playerTurnDefend() {
    if (gameOver) return;

    Player.isDefending = true;
    addLog(`${Player.name} is defending this turn!`, "player");
    enemyTurn();
}

// Enemy's turn
export function enemyTurn() {
    if (gameOver) return;

    const playerAlive = attackToPlayer(currentEnemy, Player);
    updatePlayerLife(Player.life, Player.maxLife);

    if (!playerAlive) {
        addLog(`${currentEnemy.name} defeated ${Player.name}!`, "enemy");
        addLog("You have been defeated! Game over.", "enemy");
        gameOver = true;
    }
}

// Get current enemy's cooldown
export function getCurrentEnemyCooldown() {
    return currentEnemy?.currentCooldown || 0;
}