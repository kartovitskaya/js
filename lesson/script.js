//Задание
let money, 
    start = function(){
        do {
            money = prompt('Ваш месячный доход?', 30000);
        }
        while (isNaN(money) || money === null || money === '');
        return money;
};

    start();

let appData = {
    income: {},
    addIncome:[],
    incomeMonth: 0,
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 50000,
    period: 3,
    budget: +money,
    budgetDay: 0, 
    budgetMonth: 0, 
    expensesMonth: 0,
    asking: function(){
        if(confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome;
            let cashIncome;
            do{
                itemIncome = prompt('Какой допольнительный заработок?', 'Такси');
              } 
              while(Number(itemIncome) || itemIncome === '' || itemIncome === null);
      
              do {
                cashIncome = prompt('Сколько в месяц на этом зарабатываете?', 10000);
              }
              while(isNaN(cashIncome) || cashIncome === '' || cashIncome === null);
              appData.income[itemIncome] = cashIncome;
            }

            
            
        
        let addExpenses;
        do {
            addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
          } 
          while (addExpenses === '' || addExpenses === null);

          appData.addExpenses = addExpenses.split(', ');

          appData.deposit = confirm('У вас есть депозит в банке?');
          
          for (let i = 0; i < 2; i++) {
            let itemExpenses;
            let CashExpenses;
            do {
              itemExpenses = prompt('Введите обязательную статью расходов');
            } 
            while(Number(itemExpenses) || itemExpenses === '' || itemExpenses === null);
            
            do {
              CashExpenses = prompt('Во сколько это обойдется?', 2500);
            } 
            while (isNaN(CashExpenses) || CashExpenses === '' || CashExpenses === null);

            appData.expenses[itemExpenses] = +CashExpenses;
          }
          console.log(appData.expenses);
          
          
    },
    getAddIncome: function() {
        for (let keys in appData.income){
            appData.incomeMonth += +appData.income[keys];
        }
        console.log(appData.incomeMonth);
    },

    getExpensesMonth: function() {
		for (let keys in appData.expenses){
			appData.expensesMonth += appData.expenses[keys];
        }
        
    },
    getBudget:function() { 
        appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
        appData.budgetDay = Math.floor(appData.budgetMonth / 30);
   },
    getTargetMonth:function() { 
        if (appData.budgetMonth <= 0){
            console.log ('Цель не будет достигнута');
        } else{
            appData.period = Math.round(appData.mission / appData.budgetMonth);
            console.log ('Цель будет достигнута через ' + appData.period + ' месяцев.');
        }	
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
        if (appData.deposit) {
            do {
            appData.percentDeposit = prompt('Какой годовой процент?', 10);
            } while (isNaN(appData.percentDeposit) || appData.percentDeposit === '' || appData.percentDeposit === null);
            do {
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            } while (isNaN(appData.moneyDeposit) || appData.moneyDeposit === '' || appData.moneyDeposit === null);
          }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    appData.getAddIncome();
    console.log(appData.incomeMonth);
    console.log('Расходы за месяц: ' + appData.expensesMonth);
    appData.getTargetMonth();
    console.log (appData.getStatusIncome());
    appData.getInfoDeposit();
    console.log('Процент депозита: ' + appData.percentDeposit, 'Сумма на депозите: ' + appData.moneyDeposit, 'Сбережения: ' + appData.calcSavedMoney());
    

    console.log('Наша программа включает в себя данные:')
        for (let key in appData){
	console.log('Ключ: ' + key, 'Значение: ' + appData[key]);
}



let addExpensesString = "";
appData.addExpenses.forEach(function (element) {
    addExpensesString += element[0].toUpperCase() + element.slice(1) + ', ';
});
console.log(addExpensesString.slice(0, -2));
