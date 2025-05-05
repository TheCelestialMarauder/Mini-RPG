// Game controller logic goes here
// Imports
import { Player } from '../models/player.js';
import { enemies, Enemy } from '../models/enemy.js';


//Function to do damage to an enemy
// Calculates the damage dealt to the enemy by the player
function attackToEnemy(Player, Enemy) {

    // Calculates the damage dealt to the enemy after enemy's defense
    let damage = Player.attackPower - Enemy.defensePower;
    
    // If damage is negative, set it to 0
    if (damage < 0) {
        damage = 0;
    }
    
    // Apply the damage to the enemy's life
    Enemy.life -= damage;

    // Check if the enemy is still alive
    Enemy.alive = Enemy.life > 0;
    
    // Log the attack details
    if (Enemy.alive === false) {
        console.log(`${player.name} defeated ${enemy.name}!`);
    } else {
        console.log(`${enemy.name} has ${enemy.life} life left.`);
    }

    // Return the enemy's alive status
    return Enemy.alive;

}

// Function to do damage to a player
// Calculates the damage dealt to the player by the enemy
function attackToPlayer(Enemy, Player) {
    // Calculates the damage dealt to the player after player's defense
    if (Player.isDefending === true) {
        console.log(`${Player.name} is defending!`);
        let damage = Enemy.attackPower - Player.defensePower;
        // If damage is negative, set it to 0
        if (damage < 0) {
            damage = 0;
        }
        
        // Apply the damage to the player's life
        Player.life -= damage;

    } else if (Enemy.cooldown <= 0) {
        console.log(`${Enemy.name} is attacking!`);
        // Calculates the damage dealt to the player
        Player.life -= Enemy.attackPower;
    }
    
    // Check if the player is still alive
    if (Player.life <=0) {
        console.log(`${Enemy.name} defeated ${Player.name}!`);
    } 
    else {
        console.log(`${Player.name} has ${Player.life} life left.`);
    }

    // Reset player's defending status
    Player.isDefending = false;

    // Return if the player is still alive
    return Player.life > 0;

}

// Function to start the game
function startGame() {
    console.log("Game started!");
    console.log(`Player: ${Player.name}, Life: ${Player.life}`);
    console.log("Enemies:");

    enemies.forEach(enemy => {

        console.log(`${enemy.name}, Life: ${enemy.life}`);

        // Player attacks the enemy
        attackToEnemy(Player, enemy);

        if (enemy.alive) {
            // Enemy attacks the player
            attackToPlayer(enemy, Player);
        } else {
            console.log(`${enemy.name} is defeated!`);
        }

    });
}
