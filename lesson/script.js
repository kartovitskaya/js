//Задание

let money = 300;
let income = 'taxi';
let addExpenses = 'Food, Water, Study';
let deposit = false;
let mission = 100;
let period = 5;

console.log('money', 'income', 'deposit');
console.log(income.length);
console.log(period, mission);
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

let budgetDay = 300;
budgetDay /=30;
console.log('budgetDay:', budgetDay);
budgetDay %=30;
console.log('budgetDay:', budgetDay);


//Задание 2
 
let num = 266219;
function persistence(num) {
    return [...num.toString()].reduce((p, v) => p * v);
}
console.log(persistence(num));

console.log(persistence(num)**3);

console.log(persistence(num).substring(0, 1));

