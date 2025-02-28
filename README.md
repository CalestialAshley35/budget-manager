# Quantum Finance Manager

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge&logo=github)](https://calestialashley35.github.io/budget-manager/)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

**Quantum Finance Manager** is a personal finance web application designed to help users manage their income and expenses effectively. The app provides a clean and intuitive interface for tracking financial transactions, visualizing trends, and managing budgets across different categories. The app is fully functional, user-friendly, and requires no additional setup. You can start using it instantly by visiting the live link below.

## Key Features

- **Transaction Tracking:** Easily add, view, and manage your transactions with details such as amount, description, category, and date.
- **Income & Expense Overview:** View a summary of your total income, expenses, and balance.
- **Financial Analytics:** Visualize your financial data with interactive charts, including:
  - Doughnut chart to show category-wise distribution of income and expenses.
  - Line chart to track income and expense trends over time.
- **Custom Filters:** Filter transactions by type (income or expense) and category to focus on specific financial data.
- **Transaction Deletion:** Users can remove transactions with a simple confirmation prompt.
- **Responsive Design:** Optimized for both desktop and mobile use.
- **Local Storage Support:** All transaction data is saved in the browser’s local storage, ensuring persistence across sessions.

## Live Demo

You can access the live version of **Quantum Finance Manager** by visiting the following link:
[Quantum Finance Manager](https://calestialashley35.github.io/budget-manager/)

## Usage

1. **Add a Transaction:** 
   - Click on the "Add Transaction" button to open the form.
   - Fill out the transaction details, including description, amount, type (income or expense), category, and date.
   - Submit the form to add the transaction to your list.

2. **View Analytics:**
   - Use the interactive charts to visualize your financial data.
   - Switch between different chart types (Categories or Trends) by clicking the buttons above the chart.

3. **Filter Transactions:**
   - Use the filter options to view transactions based on type (income/expense) and category.

4. **Delete a Transaction:**
   - Click the trash icon next to a transaction to delete it. A confirmation dialog will appear before the transaction is removed.

## Technologies Used

- **HTML:** The structure of the application.
- **CSS:** Styling for the user interface, including responsive design.
- **JavaScript:** Logic for handling transactions, updating financial data, and rendering charts.
- **Chart.js:** A JavaScript library for generating interactive charts and graphs.
- **Luxon:** A library for handling and formatting dates and times.
- **Font Awesome:** For icons used in the application.

## Detailed Explanation

### HTML Structure
The application is built with a simple, semantic HTML5 structure:

- A `header` containing the branding and financial overview (total balance, income, and expenses).
- An `analytics-section` with a chart container for financial visualizations and a transaction management area.
- Each transaction is rendered as a list item, displaying its description, amount, and category.

### CSS Styling
The app uses modern CSS features like:
- CSS Grid for layout management.
- CSS Variables for consistent theming across the application.
- Media queries for responsive design, ensuring the app looks great on both mobile and desktop devices.

### JavaScript Logic

1. **Transaction Management:**
   - Transactions are stored in `localStorage`, allowing data persistence across sessions.
   - Each transaction has a description, amount, type (income or expense), category, and date.
   - Transactions can be filtered by type and category using dropdown menus.

2. **Financial Analytics:**
   - A doughnut chart shows the distribution of transactions by category.
   - A line chart shows the trend of income and expenses over time.

3. **Financial Overview:**
   - The total balance, income, and expenses are dynamically updated whenever a new transaction is added.
   - The app displays a trend indicator showing the percentage change in balance compared to the previous session.

4. **Interaction:**
   - Clicking on the chart buttons switches between the doughnut and line charts.
   - Clicking the delete button for a transaction prompts the user for confirmation before removal.

## Setup

No setup is required to start using the application. Simply visit the live demo link provided above.

## Contributions

If you’d like to contribute to the development of this project, feel free to fork the repository and submit pull requests. Please follow the standard GitHub practices and ensure that your code adheres to the style guidelines of the project.

## License

This project is open-source and licensed under the [MIT License](LICENSE).

## Acknowledgements

- **Chart.js** - For providing the powerful charting library.
- **Luxon** - For handling date and time formatting in a robust manner.
- **Font Awesome** - For providing icons to represent financial categories.
- **Google Fonts** - For providing the "Inter" font, which is used for the app's text.

