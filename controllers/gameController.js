// Imports
import { Player } from '../models/player.js';
import { enemies } from '../models/enemy.js';
import { attackToEnemy } from './attackToEnemy.js';
import { attackToPlayer } from './attackToPlayer.js';

// Global variables
let currentEnemyIndex = 0;
let currentEnemy = null;

// Initialize enemies with cooldowns
function initializeEnemies() {
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
function startGame() {
    console.log("Game started!");
    console.log(`Player: ${Player.name}, Life: ${Player.life}`);
    
    initializeEnemies();

    currentEnemy = enemies[currentEnemyIndex];
    console.log(`First enemy: ${currentEnemy.name}, Life: ${currentEnemy.life}`);

    runCombatLoop();
}

// Combat loop (automatic for now)
function runCombatLoop() {
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

export { startGame };