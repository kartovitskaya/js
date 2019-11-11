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

const AppData = function() {
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budget = 0;
    this.budgetDay = 0; 
    this.budgetMonth = 0; 
    this.expensesMonth = 0;
};

AppData.prototype.check = function() {
    do{
        start.removeAttribute('disabled');
    }
    while (salaryAmount.value !== '');
};
AppData.prototype.start = function () {
    this.budget = +salaryAmount.value;
    
    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
};
AppData.prototype.showResult = function(){
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    
};
AppData.prototype.addExpensesBlock = function(){

    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');

    if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
    }
};
AppData.prototype.getExpenses = function(){
    const _this = this;
    expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value,
         cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !=='' && cashExpenses !== ''){
            _this.expenses[itemExpenses] = +cashExpenses;
        }
    });
};
AppData.prototype.addIncomeBlock = function () {
let cloneIncomeItem = incomeItems[0].cloneNode(1);
incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
incomeItems = document.querySelectorAll('.income-items');

    if (incomeItems.length === 3) {
        incomePlus.style.display = 'none';
    }
};
AppData.prototype.getIncome = function () {
const _this = this;
incomeItems.forEach(function (item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' && cashIncome !== '') {
        _this.income[itemIncome] = +cashIncome;
        }
    });

};

  AppData.prototype.getExpensesMonth = function() {
    for (let keys in this.expenses){
        this.expensesMonth += this.expenses[keys];
    }
};
AppData.prototype.getAddExpenses = function(){
    let addExpenses = additionalExpensesItem.value.split(',');
    const _this = this;
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
            _this.addExpenses.push(item);
        }
    });
};
AppData.prototype.getIncomeMonth = function(){
    for (let key in this.income) {
        this.incomeMonth += +this.income[key];
    }
};
AppData.prototype.getAddIncome = function(){
    const _this = this;
    additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if (itemValue !== ''){
            _this.addIncome.push(itemValue);
        }
    });
};

AppData.prototype.getBudget = function() { 
    this.budgetMonth = this.budget + this.incomeMonth  - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function() { 
    return targetAmount.value / this.budgetMonth;

};
AppData.prototype.getStatusIncome = function () {
    if (800 <= this.budgetDay) {
        return 'Высокий уровень дохода';
    }else if (300 <= this.budgetDay && this.budgetDay < 800) {
        return 'Средний уровень дохода';
    }else if(0 <= this.budgetDay && this.budgetDay < 300){
        return 'Низкий уровень дохода';
    }  else if (this.budgetDay < 0) {
        return 'Что-то пошло не так';
    }
};
AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){
        this.percentDeposit = prompt('Какой годовой процент?', '10');
        this.dataTypeNumber(this.percentDeposit);
        this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        this.dataTypeNumber(this.moneyDeposit);
    }
};
AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.reset = function(){
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


    incomePlus.style.display = 'block';
    expensesPlus.style.display = 'block';

    periodSelect.value = '0';
     periodAmount.innerHTML = periodSelect.value;

    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth =0;
    this.expensesMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.expenses = {};
    this.addIncome = [];
    this.addExpenses = [];
    this.deposit = false;



    inputText.forEach(function(item){
        if (item != periodSelect){
            item.value = '';
        }
    });


    inputData.forEach(function(item, i){
        item.removeAttribute('disabled');
    });


    start.style.display = 'block';
    cancel.style.display = 'none';
    
    
}




AppData.prototype.addEventListeners = function () {
    start.addEventListener('click', this.start.bind(this));
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

 expensesPlus.addEventListener('click', this.addExpensesBlock);
    incomePlus.addEventListener('click', this.addIncomeBlock);

    resetBtn.addEventListener('click', this.reset);

    periodSelect.addEventListener('mousemove', function () {
        periodAmount.innerHTML = periodSelect.value;
        incomePeriodValue.value = this.calcPeriod();
        
        
      });
};

const appData = new AppData();
appData.addEventListeners();