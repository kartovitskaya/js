//Задание
//Задание
let money,
    start = function(){
        do {
            money = +prompt('Ваш месячный доход?', 30000);
        }
        while (isNaN(money) || money === null || money === '');
        return money;
};

start();

let appData = {
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        budget: money,
        deposit: false,
        mission: 50000,
        period: 3,
        budgetDay: 0,
        budgetMonth: 0,
        expemsesMonth:0,
        howMuchFirst:0,
        howMuchSecond:0,
        asking: function(){
            let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLowerCase().split(', ');
                appData.deposit = confirm('Есть ли у вас депозит в банке?');
        },
        getExpensesMonth: function(){
            let sum  = 0, question;

            for (let i = 0; i < 2; i++){
                if(i === 0){
                    howMuchFirst = prompt('Введите обязательную статью расходов', 'Квартплата');
                }
                else{
                    howMuchSecond = prompt('Введите обязательную статью расходов', 'Бензин'); 
                }
                do {
                    questiion = prompt('Во сколько это обойдется?', 2500);
                }
                while(isNaN(questiion) || questiion === '' || questiion === null);
                sum += +questiion;
            }
            return sum;
            },
            expensesMonth(){
                getExpensesMonth;
            },
            getAccumulatedMonth: function(){
                return money - expensesMonth;
            },
            accumulatedMonth(){
                getAccumulatedMonth  
            },
            getTargetMonth: function(){
                return appData.mission / appData.accumulatedMonth;
            },
            getStatusIncome: function(){
                if (appData.budgetDay <= 0){
                    return ('Что-то пошло не так');
                }else if (0 < appData.budgetDay <= 300) {
                    return ('Низкий уровень дохода');
                }else if(300 <= appData.budgetDay <= 800){
                    return ('Средний уровень дохода');
                }else if(appData.budgetDay > 800){
                    return ('Высокий уровень дохода');
                }
            }

};
    appData.budgetDay = appData.accumulatedMonth/30;
    console.log(Math.floor(appData.getTargetMonth()));

    console.log(appData.getStatusIncome());

    
    let targetMonth = function(){
        if (appData.getTargetMonth < 0) {
            return ('Цель не будет достигнута');
        }else {
            return ('Цель будет достигнута');
        }
    };

    console.log(targetMonth());


