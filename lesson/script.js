//Задание
let money = start();
    function start(){
        let money;
        do {
            money = prompt('Ваш месячный доход?', 30000);
        }
        while (isNaN(money) || money === null || money === '');
        return +money;
};


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
            question = prompt('Во сколько это обойдется?', 2500);
        }
        while(isNaN(question) || question === '' || question === null);
        sum += +question;
    }
    return sum;
    };

let expensesMonth = getExpensesMonth();
console.log ('Расходы за месяц: ' + expensesMonth);

let getAccumulatedMonth = function() {
    return money - expensesMonth;
    };

    console.log(getAccumulatedMonth());

let getTargetMonth = function() {
    return mission / getAccumulatedMonth();
    };
    getTargetMonth();
    console.log(Math.floor(getTargetMonth()));

    let  budgetDay = getAccumulatedMonth()/30;

    
    let targetMonth = function(){
        if (getTargetMonth <0) {
            return 'Цель не будет достигнута';
        }else {
            return 'Цель будет достигнута';
        }
    };

    console.log(targetMonth());





    let showTypeOf = function(data) {
        console.log(data, typeof(data));
    };
    showTypeOf(money);
    showTypeOf(income);
    showTypeOf(deposit);

    
    
    let getStatusIncome = function(){
        if( budgetDay > 800 ) {
            return 'Высокий уровень дохода';
          } else if( budgetDay >= 300 && budgetDay <= 800 ) {
            return 'Средний уровень дохода';
          } else if( budgetDay >= 0 && budgetDay < 300 ) {
            return 'Низкий уровень дохода';
          } else if( budgetDay < 0 ) {
            return 'Что-то пошло не так';
          }
    };
    

    console.log(getStatusIncome());
