function attackToPlayer(Enemy, Player) {
    let damage = 0;

    // If player is defending
    if (Player.isDefending) {
        console.log(`${Player.name} is defending!`);
        // Calculate damage considering defense
        damage = Enemy.attackPower - Player.defensePower;
        // Ensure damage is not negative
        if (damage < 0) {
            damage = 0;
        }
    } else if (Enemy.currentCooldown <= 0) {
        console.log(`${Enemy.name} is attacking!`);
        damage = Enemy.attackPower;
        // Reset enemy cooldown after attack
        Enemy.currentCooldown = Enemy.attackCooldown;

    } else {
        // Enemy is on cooldown
        console.log(`${Enemy.name} is waiting. Cooldown remaining: ${Enemy.currentCooldown}`);
        Enemy.currentCooldown--;
        
        // Return alive status of the player, no attack this turn
        return Player.life > 0;
    }

    // Apply damage to player life
    Player.life -= damage;

    // Reset player's defending status after being attacked
    Player.isDefending = false;

    // Log result
    if (Player.life <= 0) {
        console.log(`${Enemy.name} defeated ${Player.name}!`);
    } else {
        console.log(`${Player.name} has ${Player.life} life left.`);
    }

    // Return alive status so the controller knows if the player is still alive
    return Player.life > 0;
}