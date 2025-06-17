// Imports
import { Player } from '../models/player.js';
import { enemies } from '../models/enemy.js';
import { attackToEnemy } from './attackToEnemy.js';
import { attackToPlayer } from './attackToPlayer.js';
import { addLog, updatePlayerLife } from '../main.js';

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
    addLog("Game started!");
    addLog(`Player: ${Player.name}, Life: ${Player.life}`);
    updatePlayerLife(Player.life);

    initializeEnemies();
    shuffledEnemies = shuffleEnemies([...enemies]);
    currentEnemy = shuffledEnemies[currentEnemyIndex];
    addLog(`First enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`);
}

// Player chooses to attack
export function playerTurnAttack() {
    if (gameOver) return;

    const enemyAlive = attackToEnemy(Player, currentEnemy);
    updatePlayerLife(Player.life);

    if (!enemyAlive) {
        currentEnemyIndex++;

        if (currentEnemyIndex >= shuffledEnemies.length) {
            addLog("You win! All enemies defeated.");
            gameOver = true;
            return;
        }

        currentEnemy = shuffledEnemies[currentEnemyIndex];
        addLog(`${shuffledEnemies[currentEnemyIndex - 1].name} defeated!`);
        addLog(`Next enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`);
    }

    enemyTurn();
}

// Player chooses to defend
export function playerTurnDefend() {
    if (gameOver) return;

    Player.isDefending = true;
    addLog(`${Player.name} is defending this turn!`);
    enemyTurn();
}

// Enemy's turn
export function enemyTurn() {
    if (gameOver) return;

    const playerAlive = attackToPlayer(currentEnemy, Player);
    updatePlayerLife(Player.life);

    if (!playerAlive) {
        addLog(`${currentEnemy.name} defeated ${Player.name}!`);
        addLog("You have been defeated! Game over.");
        gameOver = true;
    }
}