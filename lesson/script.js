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
    dataTypeNumber:function (n){
		while (isNaN(n) || n === '' || n === null){
			n = prompt('Вы ввели не верное значение. Повторите попытку.');
		}
		return Number(n);
    },
    dataTypeString:function (s){
		while (!isNaN(s) || s == '' || s === null){
			s = prompt('Вы ввели не верное значение. Повторите попытку.');
		}
		return String(s);
	},
    asking: function(){
        if(confirm('Есть ли у вас дополнительный заработок?')){
            let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Такси');
            appData.itemIncome = appData.dataTypeString(itemIncome);
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            appData.cashIncome = appData.dataTypeNumber(cashIncome);
            appData.income[itemIncome] = cashIncome;
        }
        let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let answerFirst;
		let answerSecond;
		for (let i = 0; i < 2; i++){
			if (i == 0){
                let questionFirst = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Комунальные платежи');
                appData.questionFirst = appData.dataTypeString(questionFirst);
				answerFirst = prompt('Во сколько это обойдется?', 2500);
				appData.expenses[questionFirst] = +answerFirst;
			}
			if (i == 1){
                let questionSecond = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Питание');
                appData.questionSecond = appData.dataTypeString(questionSecond);
				answerSecond = prompt('Во сколько это обойдется?', 2500);
				appData.expenses[questionSecond] = +answerSecond;
			}
		}
    },
    getExpensesMonth: function() {
		for (let keys in appData.expenses){
			appData.expensesMonth += appData.expenses[keys];
		}
    },
    getBudget:function() { 
        appData.budgetMonth = appData.budget - appData.expensesMonth;
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
        if(appData.deposit){
            appData.percentDeposit = prompt('Какой годовой процент?', '10');
            appData.dataTypeNumber(appData.percentDeposit);
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            appData.dataTypeNumber(appData.moneyDeposit);
        }
    },
    calcSavedMoney: function(){
        return appData.budgetMonth * appData.period;
    }
};

    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    console.log('Расходы за месяц: ' + appData.expensesMonth);
    appData.getTargetMonth();
    console.log (appData.getStatusIncome());
    appData.getInfoDeposit();
    console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());
    

    console.log('Наша программа включает в себя данные:')
        for (let key in appData){
	console.log('Ключ: ' + key, 'Значение: ' + appData[key]);
}

let textAddExpenses = function(){
    appData.addExpenses = appData.addExpenses.map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase());
    textAddExpenses = appData.addExpenses[i] + ', ';
}
console.log(textAddExpenses());