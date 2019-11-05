let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    plus = document.getElementsByTagName('button'),
    incomePlus = plus[0],
    expensesPlus = plus[1],

    depositCheck = document.querySelector('#deposit-check'),


    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    budgetDayValue = document.getElementsByClassName('budget_day-value'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value'),
    expensesMonthValue = document.getElementsByClassName('expenses_month-value'),
    additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
    incomePeriodValue = document.getElementsByClassName('income_period-value'),
    targetMonthValue = document.getElementsByClassName('target_month-value'),

    salaryAmount = document.querySelector('.salary-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    incomeTitle = document.querySelector('.income-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    expensesTitle = document.querySelector('.expenses-title'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
    periodAmount = document.querySelector('.period-amount'); 

//Задание
let appData = {
    income: {},
    incomeMonth: 0,
    addIncome:[],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    period: 3,
    budget: 0,
    budgetDay: 0, 
    budgetMonth: 0, 
    expensesMonth: 0,
    start: function(){
        if(salaryAmount.value === ''){
            start.setAttribute('disabled', true);
            return;
        }
        let allInput = document.querySelectorAll('.data input[type = text]');
            allInput.forEach(function (item) {
            item.setAttribute('disabled', 'disabled');
            });
            incomePlus.setAttribute('disabled', 'disabled');
            expensesPlus.setAttribute('disabled', 'disabled');
            start.style.display = 'none';
            cancel.style.display = 'block';

        appData.budget = +salaryAmount.value;

        appData.getExpenses();
        appData.getIncome();
        appData.getExpensesMonth();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.getBudget();
        appData.showResult();

    },
    showResult: function(){
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());
        incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function(){

        let cloneExpensesItem = expensesItems[0].cloneNode(true);
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
        expensesItems = document.querySelectorAll('.expenses-items');

        if(expensesItems.length === 3){
            expensesPlus.style.display = 'none';
        }
    },
    addIncomeBlock: function () {
        let cloneIncomeItem = incomeItems[0].cloneNode(1);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
        incomeItems = document.querySelectorAll('.income-items');

        if (incomeItems.length === 3) {
          incomePlus.style.display = 'none';
        }
      },
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value,
             cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !=='' && cashExpenses !== ''){
                appData.expenses[itemExpenses] = cashExpenses;
            }
            console.log(cashExpenses);
        });
    },
    getIncome: function () {
        incomeItems.forEach(function (item) {
          let itemIncome = item.querySelector('.income-title').value;
          let cashIncome = item.querySelector('.income-amount').value;
          if (itemIncome !== '' && cashIncome !== '') {
            appData.income[itemIncome] = cashIncome;
          }
        });

      },
    getAddExpenses: function(){
        let addExpenses = additionalExpensesItem.value.split(',');
        addExpenses.forEach(function(item){
            item = item.trim();
            if(item !== ''){
                appData.addExpenses.push(item);
            }
        });
    },
    getAddIncome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if (itemValue !== ''){
                appData.additionalIncome.push(itemValue);
            }
        });
    },
    getExpensesMonth: function() {
		for (let keys in appData.expenses){
			appData.expensesMonth += +appData.expenses[keys];
		}
    },
    getBudget:function() { 
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
   },
    getTargetMonth:function() { 
        return targetAmount.value / appData.budgetMonth;

    },
    getStatusIncome:function () {
        if (800 <= appData.budgetDay) {
			return 'Высокий уровень дохода';
		}else if (300 <= appData.budgetDay && appData.budgetDay < 800) {
			return 'Средний уровень дохода';
		}else if(0 <= appData.budgetDay && appData.budgetDay < 300){
			return 'Низкий уровень дохода';
		}  else if (appData.budgetDay < 0) {
			return 'Что-то пошло не так';
		}
    },
    getInfoDeposit: function(){
        if(appData.deposit){
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            appData.dataTypeNumber(appData.percentDeposit);
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            appData.dataTypeNumber(appData.moneyDeposit);
        }
    },
    calcPeriod: function(){
        return appData.budgetMonth * periodSelect.value;
    }
};

//События
    start.addEventListener('click', appData.start);
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);
