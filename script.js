const transactionForm = document.getElementById('transactionForm');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const typeSelect = document.getElementById('type');
const transactionList = document.getElementById('transactionList');
const balanceElement = document.getElementById('balance');
const incomeTotalElement = document.getElementById('incomeTotal');
const expenseTotalElement = document.getElementById('expenseTotal');
let financeChart = null;

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

const updateChart = () => {
    const ctx = document.getElementById('financeChart').getContext('2d');
    if (financeChart) financeChart.destroy();
    
    const income = transactions.filter(t => t.type === 'income').reduce((a, b) => a + b.amount, 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((a, b) => a + b.amount, 0);

    financeChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Income', 'Expenses'],
            datasets: [{
                data: [income, expenses],
                backgroundColor: ['#4CAF50', '#F44336'],
            }]
        }
    });
};

const updateTotals = () => {
    const income = transactions.filter(t => t.type === 'income').reduce((a, b) => a + b.amount, 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((a, b) => a + b.amount, 0);
    const balance = income - expenses;

    balanceElement.textContent = `$${balance.toFixed(2)}`;
    incomeTotalElement.textContent = `$${income.toFixed(2)}`;
    expenseTotalElement.textContent = `$${expenses.toFixed(2)}`;

    localStorage.setItem('transactions', JSON.stringify(transactions));
    updateChart();
};

const addTransaction = (e) => {
    e.preventDefault();
    
    const transaction = {
        id: Date.now(),
        description: descriptionInput.value,
        amount: +amountInput.value,
        type: typeSelect.value,
    };

    transactions.push(transaction);
    updateTotals();
    transactionForm.reset();
};

transactionForm.addEventListener('submit', addTransaction);
updateTotals(); 
