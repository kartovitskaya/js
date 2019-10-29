//Задание
let money,
    start = function(){
        do {
            money = +prompt('Ваш месячный доход?', 30000);
        }
        while (isNaN(money) || money === null || money === '');
        return +money;
};

start();

let income = 'taxi',
    addExpenses = 'Food, Water, Study',
    deposit = false,
    mission = 10000;



addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.toLowerCase().split(', '));

deposit = confirm('Есть ли у вас депозит в банке?');

let howMuchFirst,
    howMuchSecond;

let getExpensesMonth = function() {
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
    };
    let expensesAmount = getExpensesMonth();

let getAccumulatedMonth = function() {
    return money - expensesAmount;
    };
    let accumulatedMonth = getAccumulatedMonth();
    console.log(getAccumulatedMonth());

let getTargetMonth = function() {
    return mission / accumulatedMonth;
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





    let showTypeOf = function(data) {
        console.log(data, typeof(data));
    };
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);

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
