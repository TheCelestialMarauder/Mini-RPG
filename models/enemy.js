export class Enemy {
  constructor(name, life, attackPower, defensePower) {
    this.name = name;
    this.life = life;
    this.maxLife = life;
    this.attackPower = attackPower;
    this.defensePower = defensePower;
    this.alive = true;
    this.attackCooldown = Math.floor(attackPower / 10) || 0;
    this.currentCooldown = 0;
  }
}

// Enemies list
export const enemies = [
  new Enemy("Goblin", 60, 15, 5),
  new Enemy("Orc", 80, 20, 8),
  new Enemy("Troll", 100, 25, 10),
  new Enemy("Dragon", 150, 30, 15),
  new Enemy("Vampire", 120, 28, 12),
  new Enemy("Zombie", 70, 18, 6),
  new Enemy("Skeleton", 50, 12, 4),
  new Enemy("Werewolf", 90, 22, 9),
  new Enemy("Mummy", 75, 19, 7),
  new Enemy("Golem", 110, 27, 13),
  new Enemy("Banshee", 85, 24, 11),
  new Enemy("Hydra", 130, 32, 16),
  new Enemy("Griffin", 95, 23, 10),
  new Enemy("Minotaur", 105, 26, 14),
  new Enemy("Phoenix", 140, 35, 18),
  new Enemy("Chimera", 125, 30, 15),
  new Enemy("Kraken", 150, 40, 20),
  new Enemy("Cerberus", 115, 29, 14),
  new Enemy("Wraith", 80, 21, 9),
  new Enemy("Lich", 90, 22, 10),
];