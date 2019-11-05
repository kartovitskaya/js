let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');

books[0].appendChild(book[2]);
books[0].insertBefore(book[3], book[5]);
books[0].insertBefore(book[1], book[0]);

let body = document.querySelector('body');
body.setAttribute('style', 'background-image: url(image/you-dont-know-js.jpg)');

let nameBook3 = book[4].querySelector('a');
nameBook3.textContent = 'Книга 3. this и Прототипы Объектов';

let banner = document.querySelector('.adv');
banner.remove();

let ulBookSecond = book[0].querySelector('ul'),
    liBookSecond = book[0].querySelectorAll('li');

ulBookSecond.insertBefore(liBookSecond[6], liBookSecond[4]);
ulBookSecond.insertBefore(liBookSecond[8], liBookSecond[4]);
ulBookSecond.insertBefore(liBookSecond[2], liBookSecond[10]);

let ulBookFifth = book[5].querySelector('ul'),
    liBookFifth = book[5].querySelectorAll('li');

ulBookFifth.insertBefore(liBookFifth[2], liBookFifth[5]);
ulBookFifth.insertBefore(liBookFifth[9], liBookFifth[3]);
ulBookFifth.insertBefore(liBookFifth[5], liBookFifth[8]);

let newItem = document.createElement('li');
newItem.Content = "Глава 8: За пределами ES6";
ulBookFifth.appendChild(newItem);


let liBookSixth = ulBookFifth.querySelectorAll('li');
ulBookFifth.insertBefore(liBookSixth[10], liBookSixth[9]);

