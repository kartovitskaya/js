//Задание

let money = 300;
    income = 'taxi';
    addExpenses = 'Food, Water, Study';
    deposit = false;
    mission = 100;
    period = 5;
    budgetDay= money/30;
    budgetDay2= money%30;

console.log(typeof money, income, deposit);

console.log(income.length);

console.log('Период месяцев:', period);

console.log('Цель заработать', mission, 'рублей/долларов/гривен/юани');

console.log(addExpenses.toLowerCase().split(', '));

console.log(budgetDay);
console.log(budgetDay2);


//Задание 2
 
let num = 266219;
function persistence(num) {
    return [...num.toString()].reduce((p, v) => p * v);
}
console.log(persistence(num));

console.log(persistence(num)**3);

console.log(persistence(num).substring(0, 1));

