export class Player {
    constructor(name, life, maxLife, attackPower, defensePower) {
        this.name = name;
        this.life = life;
        this.maxLife = maxLife;
        this.attackPower = attackPower;
        this.defensePower = defensePower;
        this.isDefending = false;
        this.score = 0;
        this.inventory = [];
    }

    addItemToInventory(item) {
        if (this.inventory.length < 9) {
            this.inventory.push(item);
            return true;
        } else {
            return false;
        }
    }
}

export const player = new Player("Slayer", 100, 100, 25, 10);