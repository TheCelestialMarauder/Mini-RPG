import { addLog, updatePlayerLife, updatePlayerScore, updateEnemyLifeAndName } from '../main.js';

export function attackToEnemy(Player, Enemy) {
    // Calculate damage after enemy defense
    let damage = Player.attackPower - Enemy.defensePower;
    // Ensure damage is not negative
    if (damage < 0) {
        damage = 0;
    }

    // Apply damage to enemy life
    Enemy.life -= damage;

    // Update alive status
    Enemy.alive = Enemy.life > 0;

    // Update UI with new enemy life
    updateEnemyLifeAndName(Enemy.name, Enemy.life, Enemy.maxLife);

    // Log result
    if (!Enemy.alive) {
        console.log(`${Player.name} defeated ${Enemy.name}!`);
        addLog(`${Player.name} defeated ${Enemy.name}!`, 'player');

        // Calculate score based on maxLife
        const scoreGained = Enemy.maxLife || Enemy.life;
        Player.score += scoreGained;
        updatePlayerScore(Player.score);

    } else {
        console.log(`${Enemy.name} has ${Enemy.life} life left.`);
        addLog(`${Enemy.name} has ${Enemy.life} life left.`, 'enemy');
    }

    // Return alive status so the controller knows if the enemy is still alive
    return Enemy.alive;
}