'use strict';
//Задание 1
let enDays = 'Monday, Thuesday, Wednesday, Thursday, Friday, Saturday, Sunday';
    ruDays = 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье';
if (lang = "en") {
    console.log(enDays);
} else {
    console.log(ruDays);
}

switch(true) {
        case (lang = "en"):
            console.log(enDays);
            break;
        case (lang ="ru") :
            console.log(ruDays);
            break;
}

let result = lang = "en " ? enDays : ruDays;
    console.log('result:', result);

//Задание2

let namePerson = prompt('Введите имя');
        role = 
        (namePerson === 'Артём') ? 'директор':
        (namePerson === 'Максим') ? 'преподаватель': 'студент';
    
    console.log(role);
