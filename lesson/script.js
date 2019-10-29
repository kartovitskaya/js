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
        asking: function(){
            let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLowerCase().split(', ');
                appData.deposit = confirm('Есть ли у вас депозит в банке?');
        }
        getExpensesMonth : function(){
            let sum  = 0;
            for (let i = 0; i < 2; i++){
                if(i === 0){
                    howMuchFirst = prompt('Введите обязательную статью расходов', 'Квартплата');
                }
                else{
                    howMuchSecond = prompt('Введите обязательную статью расходов', 'Бензин'); 
                }
                do {
                    sum += +prompt('Во сколько это обойдется?', 2500);
                }
                while(isNaN(sum) || sum === '' || sum === null);
                
            }
            return sum;
            }
};


let howMuchFirst,
    howMuchSecond;

// let getExpensesMonth = function() {
//     let sum  = 0;
//     for (let i = 0; i < 2; i++){
//         if(i === 0){
//             howMuchFirst = prompt('Введите обязательную статью расходов', 'Квартплата');
//         }
//         else{
//             howMuchSecond = prompt('Введите обязательную статью расходов', 'Бензин'); 
//         }
//         do {
//             sum += +prompt('Во сколько это обойдется?', 2500);
//         }
//         while(isNaN(sum) || sum === '' || sum === null);
        
//     }
//     return sum;
//     };
// let expensesMonth = getExpensesMonth();

let getAccumulatedMonth = function() {
    return money - expensesMonth;
    };
    let accumulatedMonth = getAccumulatedMonth();
    console.log(getAccumulatedMonth());

let getTargetMonth = function() {
    return appData.mission / accumulatedMonth;
    };
    getTargetMonth();
    console.log(Math.floor(getTargetMonth()));

    
    let targetMonth = function(){
        if (getTargetMonth < 0) {
            return ('Цель не будет достигнута');
        }else {
            return ('Цель будет достигнута');
        }
    };

    console.log(targetMonth());


    budgetDay = accumulatedMonth/30;
    
    let getStatusIncome = function(){
        if (budgetDay <= 0){
            return ('Что-то пошло не так');
        }else if (0 < budgetDay <= 300) {
            return ('Низкий уровень дохода');
        }else if(300 <= budgetDay <= 800){
            return ('Средний уровень дохода');
        }else if(budgetDay > 800){
            return ('Высокий уровень дохода');
        }
    };

    console.log(getStatusIncome());
