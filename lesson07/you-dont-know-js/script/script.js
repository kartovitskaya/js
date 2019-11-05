let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');

books[0].appendChild(book[2]);
books[0].insertBefore(book[3], book[5]);
books[0].insertBefore(book[1], book[0]);

let body = document.querySelector('body');
body.setAttribute('style', 'background-image: url(image/you-dont-know-js.jpg)');

let banner = document.querySelector('.adv');
banner.remove();

let nameBookThird = book[4].querySelector('a');
nameBookThird.textContent = 'Книга 3. this и Прототипы Объектов';

let ulBookSecond = book[0].querySelector('ul');
let liBookSecond = book[0].querySelectorAll('li');
ulBookSecond.insertBefore(liBookSecond[6], liBookSecond[4]);
ulBookSecond.insertBefore(liBookSecond[8], liBookSecond[4]);
ulBookSecond.insertBefore(liBookSecond[2], liBookSecond[10]);

let ulBookFifth = book[5].querySelector('ul');
let liBookFifth = book[5].querySelectorAll('li');

let addABookFifth = ulBookFifth.replaceChild(liBookFifth[2], liBookFifth[5]);
ulBookFifth.insertBefore(addABookFifth, liBookFifth[8]);
ulBookFifth.insertBefore(liBookFifth[9], liBookFifth[3]);

let titleEight = document.createElement('li');
titleEight.textContent = 'Глава 8: За пределами ES6';

let ulBookSixth = book[2].querySelector('ul');
let liBookSixth = book[2].querySelectorAll('li');
ulBookSixth.insertBefore(titleEight, liBookSixth[9]);
