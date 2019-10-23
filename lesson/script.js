//Задание
let money = prompt('Ваш месячный доход?');

addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log(addExpenses.split(', '));

deposit = confirm('Есть ли у вас депозит в банке?');

console.log('money:', typeof money, 'income:', typeof income, 'deposit:', typeof deposit);

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

switch(true){
    case (budgetDay > 800):
        console.log('Высокий уровень дохода');
        break;
    case (300 <= budgetDay && budgetDay < 800):
        console.log('Средний уровень дохода');
        break;
    case (0 <= budgetDay && budgetDay < 300):
        console.log('Низкий уровень дохода');
        break;
    case (budgetDay < 0):
        console.log('Что то пошло не так');
        break;
    default: 
        console.log('не верно');
    }
