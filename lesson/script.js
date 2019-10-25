//Задание

let income = 'taxi',
    addExpenses = 'Food, Water, Study',
    deposit = false;

//Задание
let money = +prompt('Ваш месячный доход?');

addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

deposit = confirm('Есть ли у вас депозит в банке?');

yourMonthlyExpensesFirst = prompt('Какие обязательные ежемесячные расходы у вас есть?');
howMuchFirst = +prompt('Во сколько это обойдется?');

yourMonthlyExpensesSecond = prompt('Какие обязательные ежемесячные расходы у вас есть?');
howMuchSecond = +prompt('Во сколько это обойдется?');

howMuch = howMuchFirst + howMuchSecond;
budgetMonth = money - howMuch;
console.log(budgetMonth);

let mission = 100;
missionMonth = mission/budgetMonth;
console.log(Math.ceil(missionMonth));

let budgetDay = budgetMonth/30;
console.log(Math.floor(budgetDay));


//Урок4

let getExpensesMonth = function() {

    return howMuchFirst + howMuchSecond;
    };
    getExpensesMonth();

let getAccumulatedMonth = function() {
    return money - getExpensesMonth;
    };
    let accumulatedMonth = getAccumulatedMonth();
    console.log(accumulatedMonth);

let getTargetMonth = function(a, b) {
    return mission / accumulatedMonth;
    };
    getTargetMonth();
    console.log(Math.floor(getTargetMonth));

    let showTypeOf = function(data) {
        console.log(data, typeof(data));
    };
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);

    let getStatusIncome = function(){
        if (budgetDay <= 0){
            return ('Что-то пошло не так');
        }else if (budgetDay <= 300) {
            return ('Низкий уровень дохода');
        }else if(budgetDay <= 800){
            return ('Средний уровень дохода');
        }else {
            return ('Высокий уровень дохода');
        }
    };

    console.log(getStatusIncome());
