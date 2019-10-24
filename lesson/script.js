//Задание

let income = 'taxi';
    addExpenses = 'Food, Water, Study';
    deposit = false;

console.log(income.length);

console.log(addExpenses.toLowerCase().split(', '));


//Задание
let money = prompt('Ваш месячный доход?');

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

let getExpensesMonth = function(a, b) {
    return a + b;
    };
    getExpensesMonth(howMuchFirst, howMuchSecond);

let getAccumulatedMonth = function(a, b) {
    return a - b;
    };
    let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth);
    console.log(accumulatedMonth);

let getTargetMonth = function(a, b) {
    return a / b;
    };
    getTargetMonth(mission, accumulatedMonth);
    console.log(Math.floor(getTargetMonth));

    let showTypeOf = function(data) {
        console.log(data, typeof(data));
    };
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);

    let getStatusIncome = function(){
        if (budgetDay < 300) {
            return ('Низкий уровень дохода');
        } else if (budgetDay <= 800){
            return ('Средний уровень дохода');
        } else {
            return ('Высокий уровень дохода');
        }
    };

    console.log(getStatusIncome());
