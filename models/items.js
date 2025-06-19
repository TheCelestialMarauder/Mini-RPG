export class Item {
    constructor(name, description, type, value, effect) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.value = value;
        this.effect = effect;
    }

    use(target) {
        this.effect(target, this.value);
    }
}

// Item list
export const itemList = [
    new Item("Small Potion", "Heals 30 HP", "healing", 30, (player, value) => {
        player.life = Math.min(player.life + value, player.maxLife);
    }),
    new Item("Large Potion", "Heals 60 HP", "healing", 60, (player, value) => {
        player.life = Math.min(player.life + value, player.maxLife);
    }),
    new Item("Iron Sword", "Boosts attack by 10", "attackBoost", 10, (player, value) => {
        player.attackPower += value;
    }),
    new Item("Steel Sword", "Boosts attack by 20", "attackBoost", 20, (player, value) => {
        player.attackPower += value;
    }),
    new Item("Wooden Shield", "Boosts defense by 5", "defenseBoost", 5, (player, value) => {
        player.defensePower += value;
    }),
    new Item("Iron Shield", "Boosts defense by 10", "defenseBoost", 10, (player, value) => {
        player.defensePower += value;
    }),
    new Item("Magic Elixir", "Heals 50 HP and boosts defense by 5", "healing", 50, (player, value) => {
        player.life = Math.min(player.life + value, player.maxLife);
        player.defensePower += 5;
    }),
    new Item("Totem of Protection", "Blocks next attack completely", "shield", 1, (player) => {
        player.shielded = true;
    }),
    new Item("Battle Horn", "Boosts both attack and defense by 5", "boost", 5, (player, value) => {
        player.attackPower += value;
        player.defensePower += value;
    }),
    new Item("Fire Bomb", "Deals 40 damage instantly to enemy", "damage", 40, (enemy, value) => {
        enemy.life = Math.max(0, enemy.life - value);
    }),
];
