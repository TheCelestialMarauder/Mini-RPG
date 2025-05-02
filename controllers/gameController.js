// Game controller logic goes here
// Imports
import { Player } from '../models/player.js';
import { enemies, Enemy } from '../models/enemy.js';


//Function to do damage to an enemy
// Calculates the damage dealt to the enemy by the player
function attackEnemy(Player, Enemy) {

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
