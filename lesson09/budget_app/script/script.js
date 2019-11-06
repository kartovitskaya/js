let start = document.getElementById('start'),
    cancel = document.getElementById('cancel'),
    plus = document.getElementsByTagName('button'),
    incomePlus = plus[0],
    expensesPlus = plus[1],

    depositCheck = document.querySelector('#deposit-check'),


    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    budgetDayValue = document.querySelector('.budget_day-value'),
    budgetMonthValue = document.querySelector('.budget_month-value'),
    expensesMonthValue = document.querySelector('.expenses_month-value'),
    additionalIncomeValue = document.querySelector('.additional_income-value'),
    additionalExpensesValue = document.querySelector('.additional_expenses-value'),
    incomePeriodValue = document.querySelector('.income_period-value'),
    targetMonthValue = document.querySelector('.target_month-value'),

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
    data = document.querySelector('.data'),
    inputData = data.querySelectorAll('input'),
    resetBtn = document.getElementById('cancel');

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
    check: function () {
        do{
            start.removeAttribute('disabled');
        }
        while (salaryAmount.value !== '');
      },
      start: function () {
        start.style.display = 'none';
        cancel.style.display = 'block';
        let allInput = document.querySelectorAll('.data input[type = text]');



        allInput.forEach(function (item) {
          item.setAttribute('disabled', 'disabled');
        });
        incomePlus.setAttribute('disabled', 'disabled');
        expensesPlus.setAttribute('disabled', 'disabled');
        


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
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses.join(', ');
        additionalIncomeValue.value = this.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(this.getTargetMonth());
        incomePeriodValue.value = this.calcPeriod();
        
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
                appData.expenses[itemExpenses] = +cashExpenses;
            }
        });
    },
    getIncome: function () {
        incomeItems.forEach(function (item) {
          let itemIncome = item.querySelector('.income-title').value;
          let cashIncome = item.querySelector('.income-amount').value;
          if (itemIncome !== '' && cashIncome !== '') {
            this.income[itemIncome] = cashIncome;
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
		for (let keys in this.expenses){
			this.expensesMonth += +this.expenses[keys];
		}
    },
    getBudget:function() { 
        this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
        this.budgetDay = Math.floor(this.budgetMonth / 30);
   },
    getTargetMonth:function() { 
        return targetAmount.value / this.budgetMonth;

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
        return this.budgetMonth * periodSelect.value;
    },
    reset: function(){
		let inputText = document.querySelectorAll('input');
            expensesItems.forEach(function(item, i) {
                if(i > 0){
                    expensesItems[i].remove();
                }
        
            });
            
            incomeItems.forEach(function(item, i) {
                if(i > 0){
                    incomeItems[i].remove();
                }
        
            });
            inputText.forEach(function(item){
                item.value = '';
            });
        
    
            inputData.forEach(function(item, i){
                item.removeAttribute('disabled');
            });

		incomePlus.style.display = 'block';
        expensesPlus.style.display = 'block';
        start.style.display = 'block';
        cancel.style.display = 'none';
        periodSelect.value = 1;
		
		appData.budget = 0;
		appData.budgetDay = 0;
		appData.budgetMonth =0;
		appData.expensesMonth = 0;
		appData.income = {};
		appData.incomeMonth = 0;
		appData.expenses = {};
		appData.addIncome = [];
		appData.addExpenses = [];
        appData.deposit = false;
        
        
        

		
	
}
    
};

//Привязка
start.addEventListener('click', appData.start.bind(appData));

start.addEventListener('click', function(){
	start.style.display = 'none';
	cancel.style.display = 'block';
	inputData = data.querySelectorAll('input');
	inputData.forEach(function(item, i){
		item.setAttribute('disabled', 'disabled');
	})
	inputData[inputData.length - 1].removeAttribute('disabled');
	incomePlus.style.display = 'none';
	expensesPlus.style.display = 'none';
})


//События
    start.addEventListener('click', appData.start);
    expensesPlus.addEventListener('click', appData.addExpensesBlock);
    incomePlus.addEventListener('click', appData.addIncomeBlock);

    periodSelect.addEventListener('change', function () {
        periodAmount.innerHTML = periodSelect.value;
        
        
      });

    resetBtn.addEventListener('click', appData.reset);

    