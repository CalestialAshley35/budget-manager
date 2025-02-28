# Quantum Finance Manager - Detailed Tutorial

## Introduction

The Quantum Finance Manager is an advanced web-based financial tracking and management application designed to help users monitor their income, expenses, and overall financial trends. It utilizes modern web technologies such as JavaScript, Chart.js, Luxon, and CSS for a clean, responsive, and interactive experience. The application features real-time financial overview, transaction management, and dynamic charting for financial analysis.

To begin using the Quantum Finance Manager, access it directly at [Quantum Finance Manager](https://calestialashley35.github.io/budget-manager/).

## Features

- **Dashboard Overview**: Displays real-time financial balance, income, and expenses.
- **Financial Analytics**: Includes doughnut and line charts for category-based and trend-based financial analysis.
- **Transaction Management**: Allows users to add, filter, and delete transactions while tracking income and expenses by category and date.
- **Dynamic Charting**: Switch between different chart types to view financial data by categories or over time.
- **Local Storage**: All transactions and balances are stored locally in the browser to persist between sessions.

## Interface Overview

When you access the Quantum Finance Manager, you will be presented with the following key sections:

1. **Dashboard Header**
    - Displays the app name, financial balance, and quick statistics like income and expenses.
    - The **Trend Indicator** shows the financial trend (up or down) based on the balance comparison between the current and previous session.
2. **Financial Analytics**
    - Includes a chart that displays financial data. You can toggle between **Categories** (doughnut chart) and **Trends** (line chart) using the buttons at the top.
3. **Transaction Management**
    - Contains a form to add new transactions, with fields for description, amount, type (income or expense), category, and date.
    - Below the form, there is a list of added transactions, which can be filtered by type (income or expense) and category (e.g., food, salary, etc.).

## How to Use

### 1. Adding Transactions

To add a new transaction:

- Fill in the **Transaction Description** (e.g., "Salary", "Grocery").
- Enter the **Amount** (in dollars, e.g., "500.00").
- Choose whether the transaction is **Income** or **Expense**.
- Select the relevant **Category** from the list (e.g., **Salary**, **Food**, **Transport**, etc.).
- The **Date** will default to the current date, but you can manually select another date if needed.
- Click **Add Transaction** to submit.

The transaction will immediately appear in the transaction list and will reflect on the balance displayed on the dashboard.

### 2. Filtering Transactions

- Use the **Filter Controls** to narrow down the transaction list:
    - **Filter Type**: Choose between **All Transactions**, **Income**, or **Expenses**.
    - **Filter Category**: Select a specific category like **Salary**, **Food**, **Transport**, or others.
    
As you change these filters, the transaction list will update accordingly.

### 3. Deleting Transactions

To remove a transaction:
- Click on the **Trash Icon** next to any transaction in the list.
- A confirmation dialog will appear asking if you're sure you want to delete the transaction. Click **OK** to proceed.

The transaction will be removed from the list and the financial balance will update accordingly.

### 4. Viewing Financial Analytics

#### Doughnut Chart (Categories View)
The **Categories** chart gives an overview of how your money is distributed across various categories (e.g., Salary, Food, Entertainment). Each section of the doughnut represents the total amount spent or earned in that category.

- Click on the **Categories** button at the top of the chart section to display this view.

#### Line Chart (Trends View)
The **Trends** chart shows a timeline of your income and expenses, helping you visualize how your finances change over time. The data is grouped by date, and you can see trends for both income and expenses separately.

- Click on the **Trends** button at the top of the chart section to display this view.

### 5. Real-time Financial Overview

The **Dashboard Overview** section always displays your current financial status:

- **Total Balance**: Shows your net balance (income minus expenses).
- **Income Total**: The total amount of income you've recorded.
- **Expense Total**: The total amount of expenses you've recorded.
- **Trend Indicator**: Indicates whether your financial status is improving or declining compared to the previous session. It shows a percentage change in balance.

### 6. Category Filters

You can filter your transactions based on categories. When you first load the page, the **Filter Category** dropdown will be populated with the following options:

- Income categories: **Salary**, **Freelance**, **Investments**, **Other**
- Expense categories: **Food**, **Transport**, **Housing**, **Entertainment**, **Other**

As you add more categories through transactions, the filter list will automatically update to reflect new categories.

## How the Data is Stored

All transaction data, including income, expenses, and financial trends, is stored locally in your browser's **localStorage**. This ensures that your data persists between sessions. However, note that data is not shared across different devices, and clearing your browser data will remove all stored transactions.

## Summary of Key Functionalities

- **Transaction Management**: Add, filter, and delete transactions efficiently.
- **Financial Analytics**: Analyze your income and expenses using interactive charts.
- **Real-time Financial Overview**: Track your balance and income/expense trends at a glance.
- **Local Data Storage**: All your financial data is stored in local storage for persistence.

## Conclusion

Quantum Finance Manager offers an interactive, easy-to-use interface for managing personal finances. It helps users track their income and expenses, visualize financial trends, and stay organized with transaction management features. Start using it today by visiting the [Quantum Finance Manager](https://calestialashley35.github.io/budget-manager/) page and take control of your financial journey.