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
        card.className = "bg-gray-800 border border-gray-700 rounded-lg shadow-md p-4 w-64 flex flex-col items-center hover:scale-105 transition-transform";

        card.innerHTML = `
            <h3 class="text-lg font-bold mb-2 text-yellow-300">${item.name}</h3>
            <p class="text-sm text-gray-200 mb-4 text-center">${item.description}</p>
            <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded mt-auto">Pick</button>
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
