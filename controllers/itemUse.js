import { player } from '../models/player.js';
import { addLog, updatePlayerLife, updateInventory } from '../main.js';
import { enemyTurn } from './gameController.js';

export function useItemAt(index, targetEnemy) {
  const item = player.inventory[index];
  if (!item) return;

  if (item.type === 'damage' && !targetEnemy) {
    addLog(`No enemy to target with ${item.name}`, 'enemy');
    return;
  }

  if (item.type === 'damage') {
    addLog(`${item.name} used on ${targetEnemy.name}!`, 'player');
    item.use(targetEnemy);
  } else {
    addLog(`${item.name} used!`, 'player');
    item.use(player);
  }

  player.inventory.splice(index, 1);
  updateInventory(player.inventory);

  updatePlayerLife(player.life, player.maxLife);
  enemyTurn();
}
