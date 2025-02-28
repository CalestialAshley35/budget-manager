const DateTime = luxon.DateTime;
let financeChart = null;
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
const categories = {
    income: ['salary', 'freelance', 'investments', 'other'],
    expense: ['food', 'transport', 'housing', 'entertainment', 'other']
};

const updateTrendIndicator = (currentBalance, previousBalance) => {
    const trendIndicator = document.getElementById('trendIndicator');
    const trendPercentage = document.getElementById('trendPercentage');
    if (!previousBalance || currentBalance === previousBalance) {
        trendIndicator.textContent = '→';
        trendPercentage.textContent = '0%';
        return;
    }
    
    const percentage = ((currentBalance - previousBalance) / Math.abs(previousBalance)) * 100;
    if (currentBalance > previousBalance) {
        trendIndicator.innerHTML = '↑ <i class="fas fa-arrow-up"></i>';
        trendPercentage.textContent = `${Math.abs(percentage).toFixed(1)}%`;
        trendPercentage.style.color = '#4CAF50';
    } else {
        trendIndicator.innerHTML = '↓ <i class="fas fa-arrow-down"></i>';
        trendPercentage.textContent = `${Math.abs(percentage).toFixed(1)}%`;
        trendPercentage.style.color = '#F44336';
    }
};

const renderChart = (type = 'doughnut') => {
    const ctx = document.getElementById('financeChart').getContext('2d');
    if (financeChart) financeChart.destroy();

    const incomeData = transactions.filter(t => t.type === 'income');
    const expenseData = transactions.filter(t => t.type === 'expense');

    if (type === 'doughnut') {
        const categoryTotals = {};
        transactions.forEach(t => {
            categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
        });

        financeChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(categoryTotals),
                datasets: [{
                    data: Object.values(categoryTotals),
                    backgroundColor: ['#4CAF50', '#2196F3', '#9C27B0', '#FF9800', '#F44336', '#009688'],
                    borderWidth: 0,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'right' },
                    tooltip: {
                        callbacks: {
                            label: ctx => ` ${ctx.label}: $${ctx.raw.toFixed(2)}`
                        }
                    }
                }
            }
        });
    } else {
        const groupedData = transactions.reduce((acc, t) => {
            const date = DateTime.fromISO(t.date).toFormat('LLL dd');
            if (!acc[date]) acc[date] = { income: 0, expense: 0 };
            acc[date][t.type] += t.amount;
            return acc;
        }, {});

        financeChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Object.keys(groupedData),
                datasets: [
                    {
                        label: 'Income',
                        data: Object.values(groupedData).map(d => d.income),
                        borderColor: '#4CAF50',
                        tension: 0.4,
                        fill: false
                    },
                    {
                        label: 'Expenses',
                        data: Object.values(groupedData).map(d => d.expense),
                        borderColor: '#F44336',
                        tension: 0.4,
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true }
                },
                plugins: {
                    legend: { position: 'top' }
                }
            }
        });
    }
};

const updateFinancials = () => {
    const income = transactions.filter(t => t.type === 'income').reduce((a, b) => a + b.amount, 0);
    const expenses = transactions.filter(t => t.type === 'expense').reduce((a, b) => a + b.amount, 0);
    const balance = income - expenses;
    const previousBalance = parseFloat(localStorage.getItem('previousBalance')) || 0;

    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
    document.getElementById('incomeTotal').textContent = `$${income.toFixed(2)}`;
    document.getElementById('expenseTotal').textContent = `$${expenses.toFixed(2)}`;

    updateTrendIndicator(balance, previousBalance);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('previousBalance', balance);
};

const addTransaction = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const transaction = {
        id: Date.now(),
        description: formData.get('description'),
        amount: Math.abs(parseFloat(formData.get('amount'))),
        type: formData.get('type'),
        category: formData.get('category'),
        date: formData.get('date')
    };

    if (transaction.type === 'expense') transaction.amount *= -1;
    transactions.push(transaction);
    updateFinancials();
    renderTransactions();
    e.target.reset();
};

const deleteTransaction = id => {
    if (!confirm('Are you sure you want to delete this transaction?')) return;
    transactions = transactions.filter(t => t.id !== id);
    updateFinancials();
    renderTransactions();
};

const renderTransactions = () => {
    const filterType = document.getElementById('filterType').value;
    const filterCategory = document.getElementById('filterCategory').value;
    
    const filtered = transactions.filter(t => 
        (filterType === 'all' || t.type === filterType) &&
        (filterCategory === 'all' || t.category === filterCategory)
    );

    document.getElementById('transactionList').innerHTML = filtered
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(t => `
            <li class="transaction-item ${t.type