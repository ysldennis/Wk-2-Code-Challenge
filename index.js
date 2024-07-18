let shoppingList = []

const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const shoppingListElement = document.getElementById('shoppingList');
const clearListBtn = document.getElementById('clearListBtn');

// Function to render shopping list
function renderList() {
    shoppingListElement.innerHTML = '';
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = item.purchased ? 'purchased' : '';
        listItem.textContent = item.name;

        // Button to mark item as purchased
        const purchaseBtn = document.createElement('button');
        purchaseBtn.textContent = item.purchased ? 'Unmark' : 'Mark Purchased';
        purchaseBtn.addEventListener('click', () => togglePurchased(index));

        // Appending elements to list item
        listItem.appendChild(purchaseBtn);
        shoppingListElement.appendChild(listItem);
    });
}

// Function to add a new item to the list
function addItem() {
    const newItem = itemInput.value.trim();
    if (newItem) {
        shoppingList.push({ name: newItem, purchased: false });
        itemInput.value = ''; 
        renderList(); 
    }
}

// Function to toggle purchased state of an item
function togglePurchased(index) {
    shoppingList[index].purchased = !shoppingList[index].purchased; 
    renderList(); 
}

// Function to clear the list
function clearList() {
    shoppingList = [];
    renderList();
}

// Attaching event listeners
addItemBtn.addEventListener('click', addItem);
clearListBtn.addEventListener('click', clearList);

// Initial render of the list
renderList();
