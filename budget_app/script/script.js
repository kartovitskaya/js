let btnCalc = document.getElementById('start'),

plus = document.getElementsByTagName('button'),
incomePlus = plus[0],
expensesPlus = plus[1],
depositCheck = document.querySelector('#deposit-check'),
additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
budgetDayValue = document.getElementsByClassName('budget_day-value'),
expensesMonthValue = document.getElementsByClassName('expenses_month-value'),
additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
incomePeriodValue = document.getElementsByClassName('income_period-value'),
targetMonthValue = document.getElementsByClassName('target_month-value');


let salaryAmount = document.querySelector('.salary-amount'),
incomeItems = document.querySelectorAll('.income-items'),
incomeTitle = incomeItems.querySelector('.income-title'),
incomeAmount = document.querySelector('.income-amount'),
expensesItems = document.querySelectorAll('.expenses-items'),
expensesTitle = expensesItems.querySelector('.expenses-title'),
expensesAmount = document.querySelector('.expenses-amount'),
additionalExpensesItem = document.querySelector('.additional_expenses-item'),
targetAmount = document.querySelector('.target-amount'),
periodSelect = document.querySelector('.period-select');
