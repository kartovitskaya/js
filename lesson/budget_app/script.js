let btnCalc = document.getElementById('start');
console.log(btnCalc);

let buttons = document.getElementsByTagName('button');
let plusFirst = buttons[0];
let plusSecond = buttons[1];
console.log(plusFirst);
console.log(plusSecond);

let checkbox = document.querySelector('#deposit-check');
console.log(checkbox);

let addIncomeItem = document.querySelectorAll('.additional_income-item');
console.log(addIncomeItem);

let budgetDay = document.getElementsByClassName('budget_day-value'),
    expensesMonth = document.getElementsByClassName('expenses_month-value'),
    addIncome = document.getElementsByClassName('additional_income-value'),
    addExpenses = document.getElementsByClassName('additional_expenses-value'),
    incomePeriod = document.getElementsByClassName('income_period-value'),
    targetMonth = document.getElementsByClassName('target_month-value');

// console.log(addIncomeItem);
// console.log(targetMonth);

let salaryAmount = document.querySelector('.salary-amount'),
    incomeItems = document.querySelector('.income-items'),
    incomeTitle = incomeItems.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesItems = document.querySelector('.expenses-items'),
    expensesTitle = expensesItems.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    addExpensesItem = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select');