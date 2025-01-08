// Store items in an array (for simplicity in this example)
let inventory = [];

// Elements
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');
const itemExpiryInput = document.getElementById('item-expiry');
const addItemButton = document.getElementById('add-item-btn');
const itemList = document.getElementById('item-list');
const scanButton = document.getElementById('scan-btn');

// Function to update the inventory list
function updateInventory() {
  itemList.innerHTML = ''; // Clear existing list
  inventory.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${item.name}</strong><br>
      Quantity: ${item.quantity}<br>
      Expiry: ${item.expiryDate}
    `;
    itemList.appendChild(li);
  });
}

// Function to add item to inventory
function addItem() {
  const name = itemNameInput.value.trim();
  const quantity = itemQuantityInput.value.trim();
  const expiryDate = itemExpiryInput.value.trim();

  if (name && quantity && expiryDate) {
    inventory.push({ name, quantity, expiryDate });
    updateInventory();

    // Clear input fields
    itemNameInput.value = '';
    itemQuantityInput.value = '';
    itemExpiryInput.value = '';
  } else {
    alert('Please fill in all fields!');
  }
}

// Function to simulate scanning a barcode
function scanItem() {
  const sampleItem = {
    name: "Sample Medication",
    quantity: 10,
    expiryDate: "2025-06-01"
  };

  inventory.push(sampleItem);
  updateInventory();
}

// Event listeners
addItemButton.addEventListener('click', addItem);
scanButton.addEventListener('click', scanItem);

// Initialize
updateInventory();
