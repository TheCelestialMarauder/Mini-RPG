import { addLog, updatePlayerLife } from '../main.js';

export function attackToPlayer(Enemy, Player) {
    let damage = 0;

    // If player is defending
    if (Player.isDefending) {
        console.log(`${Player.name} is defending!`);
        addLog(`${Player.name} is defending!`, 'player');
        // Calculate damage considering defense
        damage = Enemy.attackPower - Player.defensePower;
        // Ensure damage is not negative
        if (damage < 0) {
            damage = 0;
        }

    } else if (Enemy.currentCooldown <= 0) {
        console.log(`${Enemy.name} is attacking!`);
        addLog(`${Enemy.name} is attacking!`, 'enemy');
        damage = Enemy.attackPower;
        // Reset enemy cooldown after attack
        Enemy.currentCooldown = Enemy.attackCooldown;

    } else {
        // Enemy is on cooldown
        console.log(`${Enemy.name} is waiting. Cooldown remaining: ${Enemy.currentCooldown}`);
        addLog(`${Enemy.name} is waiting. Cooldown remaining: ${Enemy.currentCooldown}`);
        Enemy.currentCooldown--;

        // Return alive status of the player, no attack this turn
        return Player.life > 0;
    }

    // Apply damage to player life
    Player.life -= damage;

    // Reset player's defending status after being attacked
    Player.isDefending = false;

    // Update UI with new life
    updatePlayerLife(Player.life);

    // Log result
    if (Player.life <= 0) {
        console.log(`${Enemy.name} defeated ${Player.name}!`);
        addLog(`${Enemy.name} defeated ${Player.name}!`, 'enemy');
    } else {
        console.log(`${Player.name} has ${Player.life} life left.`);
        addLog(`${Player.name} has ${Player.life} life left.`, 'player');
    }

    // Return alive status so the controller knows if the player is still alive
    return Player.life > 0;
}