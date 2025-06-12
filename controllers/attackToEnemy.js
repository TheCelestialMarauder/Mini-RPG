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

    // Log result
    if (!Enemy.alive) {
        console.log(`${Player.name} defeated ${Enemy.name}!`);
    } else {
        console.log(`${Enemy.name} has ${Enemy.life} life left.`);
    }

    // Return alive status so the controller knows if the enemy is still alive
    return Enemy.alive;
}