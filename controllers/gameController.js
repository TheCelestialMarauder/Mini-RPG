// Imports
import { Player } from '../models/player.js';
import { enemies } from '../models/enemy.js';
import { attackToEnemy } from './attackToEnemy.js';
import { attackToPlayer } from './attackToPlayer.js';

// Global variables
let currentEnemyIndex = 0;
let currentEnemy = null;
let gameOver = false;

// Initialize enemies with cooldowns
export function initializeEnemies() {
    enemies.forEach(enemy => {
        // Set initial cooldown based on attack power
        enemy.attackCooldown = Math.floor(enemy.attackPower / 50);
        if (enemy.attackCooldown < 1) {
            enemy.attackCooldown = 0;
        }
        enemy.currentCooldown = 0;
    });
    console.log("Enemies initialized with cooldowns.");
}

// Start the game
export function startGame() {
    console.log("Game started!");
    console.log(`Player: ${Player.name}, Life: ${Player.life}`);
    
    initializeEnemies();

    currentEnemy = enemies[currentEnemyIndex];
    console.log(`First enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`);
}

/* Combat loop (automatic for now)
export function runCombatLoop() {
    while (Player.life > 0 && currentEnemyIndex < enemies.length) {
        console.log(`\nTurn against ${currentEnemy.name}:`);

        // Player attacks
        const enemyAlive = attackToEnemy(Player, currentEnemy);

        if (!enemyAlive) {
            console.log(`${currentEnemy.name} defeated!`);
            currentEnemyIndex++;

            if (currentEnemyIndex >= enemies.length) {
                console.log("You win! All enemies defeated.");
                break;
            }

            currentEnemy = enemies[currentEnemyIndex];
            console.log(`Next enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`);
            continue;
        }

        // Enemy attacks if not dead
        const playerAlive = attackToPlayer(currentEnemy, Player);

        if (!playerAlive) {
            console.log("You have been defeated! Game over.");
            break;
        }
    }
}
*/

// Player chooses to attack
export function playerTurnAttack() {
    if (gameOver) return;

    const enemyAlive = attackToEnemy(Player, currentEnemy);

    if (!enemyAlive) {
        currentEnemyIndex++;

        if (currentEnemyIndex >= enemies.length) {
            console.log("You win! All enemies defeated.");
            gameOver = true;
            return;
        }

        currentEnemy = enemies[currentEnemyIndex];
        console.log(`Next enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`);
    }

    enemyTurn();
}

// Player chooses to defend
export function playerTurnDefend() {
    if (gameOver) return;

    Player.isDefending = true;
    console.log(`${Player.name} is defending this turn!`);
    enemyTurn();
}

// Enemy's turn
export function enemyTurn() {

    const playerAlive = attackToPlayer(currentEnemy, Player);
    if (gameOver) return;
    if (!playerAlive) {
        console.log("You have been defeated! Game over.");
        gameOver = true;
    }
}