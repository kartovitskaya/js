//Задание
let money, 
    start = function(){
        do {
            money = prompt('Ваш месячный доход?', 30000);
        }
        while (isNaN(money) || money === null || money === '');
        return +money;
};

    start();

let appData = {
    income: {},
    addIncome:[],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 50000,
    period: 3,
    budget: money,
    budgetDay: 0, 
    budgetMonth: 0, 
    expensesMonth: 0,
    
    asking: function(){
        let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm('Есть ли у вас депозит в банке?');

        let answerFirst;
		let answerSecond;
		for (let i = 0; i < 2; i++){
			if (i == 0){
				let questionFirst = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Комунальные платежи');
				answerFirst = prompt('Во сколько это обойдется?', 2500);
				appData.expenses[questionFirst] = +answerFirst;
			}
			if (i == 1){
				let questionSecond = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'Питание');
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
};

    appData.asking();
    appData.getExpensesMonth();
    appData.getBudget();
    console.log('Расходы за месяц: ' + appData.expensesMonth);
    appData.getTargetMonth();
    console.log (appData.getStatusIncome());

    console.log('Наша программа включает в себя данные:')
        for (let key in appData){
	console.log('Ключ: ' + key, 'Значение: ' + appData[key]);
}