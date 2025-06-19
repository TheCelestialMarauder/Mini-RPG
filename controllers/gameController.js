// Imports
import { player } from '../models/player.js';
import { enemies } from '../models/enemy.js';
import { attackToEnemy } from './attackToEnemy.js';
import { attackToPlayer } from './attackToPlayer.js';
import { addLog, updatePlayerLife, updateEnemyLifeAndName, updatePlayerScore } from '../main.js';
import { generateDropOptions, showDropOptions } from '../utils/itemDrop.js';

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
    addLog(`Player: ${player.name}, Life: ${player.life}`, "player");
    updatePlayerLife(player.life, player.maxLife);

    initializeEnemies();
    shuffledEnemies = shuffleEnemies([...enemies]);
    currentEnemy = shuffledEnemies[currentEnemyIndex];
    addLog(`First enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`, "enemy");
    updateEnemyLifeAndName(currentEnemy.name, currentEnemy.life, currentEnemy.maxLife);
}

// Player chooses to attack
export function playerTurnAttack() {
    if (gameOver) return;

    const enemyAlive = attackToEnemy(player, currentEnemy);
    updatePlayerLife(player.life, player.maxLife);

    if (!enemyAlive) {
        const scoreGained = currentEnemy.maxLife || currentEnemy.life;
        player.score += scoreGained;
        updatePlayerScore(player.score);

        currentEnemyIndex++;

        if (currentEnemyIndex >= shuffledEnemies.length) {
            addLog("You win! All enemies defeated.", "player");
            gameOver = true;
            return;
        }

        addLog(`${currentEnemy.name} defeated!`, "player");

        const dropOptions = generateDropOptions();
        showDropOptions(dropOptions);

        window.currentDropOptions = dropOptions;

        currentEnemy = shuffledEnemies[currentEnemyIndex];
        window.currentEnemy = currentEnemy;
        addLog(`Next enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`, "enemy");
        updateEnemyLifeAndName(currentEnemy.name, currentEnemy.life, currentEnemy.maxLife);
    }

    enemyTurn();
}

// Player chooses to defend
export function playerTurnDefend() {
    if (gameOver) return;

    player.isDefending = true;
    addLog(`${player.name} is defending this turn!`, "player");
    enemyTurn();
}

// Enemy's turn
export function enemyTurn() {
    if (gameOver) return;

    const playerAlive = attackToPlayer(currentEnemy, player);
    updatePlayerLife(player.life, player.maxLife);

    if (!playerAlive) {
        addLog(`${currentEnemy.name} defeated ${player.name}!`, "enemy");
        addLog("You have been defeated! Game over.", "enemy");
        gameOver = true;
    }
}

// Get current enemy's cooldown
export function getCurrentEnemyCooldown() {
    return currentEnemy?.currentCooldown || 0;
}