let firstNumber = +prompt('Введите первое число', 10);
    secondNumber = +prompt('Введите второе число', 5);

let taskRes = function() {
    if (firstNumber > secondNumber){
        return ('Первое число больше второго');
    }else if (firstNumber < secondNumber) {
        return ('Второе число больше первого');
    }else if(firstNumber = secondNumber){
        return ('Числа равны');
    }else {
        return ('Что-то пошло не так');
    }
};
console.log(taskRes());

let firstYear = +prompt('Введите первый год', 2010);
    secondYear = +prompt('Введите второй год', 2050);

const getLeapYears = (start, end) =>
  [...Array(end - start + 1)]
    .map((n, i) => start + i)
    .filter(n => ((n % 100) && !(n % 4)) || !(n % 400));

console.log(getLeapYears(firstYear, secondYear));


let sum = 0;

    while (true) {

    let n = +prompt("Введите число", '');

    if (!n) break; 

    sum += n;

    }
    console.log( 'Сумма: ' + sum );


let prNum;
prNum = Math.floor(Math.random() * 100)+1;

function guessNum() {
     let num;    
     while(true){
        num = +prompt ('Угадай число', 1);
        if (num == prNum) {
            messageWin = alert('Поздравляю вы угадали!!!'); 
            messageWin = confirm('Хотите сыграть еще?'); 
        } else if (num > 100 || num < 1) {
           messageReq = alert('Введите число от 1 до 100');
        } else if (num > prNum) {
           messageMore = alert('Mеньше!');
        } else if (num < prNum) {
           messageLess = alert('Больше!');
        }else if (isNaN(num)){
            messageLess = alert('Введи число!');
         }
     }

}

guessNum();
