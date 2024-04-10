const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const description = document.getElementById('description');
const amount = document.getElementById('amount');

const dummyTransactions = [
  { id: 1, description: 'Lunch', amount: -20 },
  { id: 2, description: 'Check', amount: 400 },
  { id: 3, description: 'Books', amount: -12 },
  { id: 4, description: 'New TV', amount: -150 },
];

let transactions = dummyTransactions;

// Add a new transaction
function addTransaction(e) {
  e.preventDefault();

  if (description.value.trim() === '' || amount.value.trim() === '') {
    alert('Please enter description and amount');
  } else {
    const transaction = {
      id: generateID(),
      description: description.value,
      amount: +amount.value
    }

    transactions.push(transaction);
    addTransactionDOM(transaction);
    updateValues();
    description.value = '';
    amount.value = '';
  }
}

// Generate random ID
function generateID() {
  return Math.floor(Math.random() * 1000000000);
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
  // Get sign (either positive + or negative -)
  const sign = transaction.amount < 0 ? '-' : '+';

  // Create list item element
  const item = document.createElement('li');

  // Add class based on sign value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    ${transaction.description} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
  `;

  list.appendChild(item);
}

// Update the balance, income, and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1) 
    .toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `+$${income}`;
    money_minus.innerText = `-$${expense}`;
}

// Remove transaction by Id
function removeTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);

  init();
}

// Init app
function init() {
  list.innerHTML = '';
  transactions.forEach((item) => addTransactionDOM(item));
  updateValues();
}

init();

// Event listeners
form.addEventListener('submit', addTransaction);