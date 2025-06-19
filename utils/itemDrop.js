import { itemList } from "../models/items.js";
import { player } from '../models/player.js';
import { updateInventory, addLog } from '../main.js';

// Select 3 random items from the itemList
export function generateDropOptions() {
  const shuffled = [...itemList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

// Show the drop options to the player
export function showDropOptions(options) {
    const dropContainer = document.getElementById('dropOptions');
    dropContainer.innerHTML = '';

    options.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('drop-card');
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button>Pick</button>
        `;

        // Add click event to the button
        card.querySelector('button').addEventListener('click', () => {
            const added = player.addItemToInventory(item);
            updateInventory(player.inventory);
            if (added) {
                addLog(`${item.name} added to inventory`, "player");
            } else {
                addLog(`Inventory is full! Could not add ${item.name}`, "player");
            }
            dropContainer.innerHTML = '';
        });

        dropContainer.appendChild(card);
    });
}
