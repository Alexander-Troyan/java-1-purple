 
 const money = 80;
 const workHours = 5;
 let days = 9;

 console.log('Смогу ли я работать? ' + ((workHours*days) > 40)); //успею или нет
 console.log('Стоимость работ: ' + money*40 + '$'); //заработок


 /* Упражнение размещение депозита */

const investmentVasya = 12000;
const homeValue = 13500;
const annualField = 0.07;
const trem = 24;

let total = investmentVasya * (1+annualField/12)**trem;
console.log(total);


if (total > homeValue) {
  console.log(`Может купить себе дом. Остаток после покупки дома ${total - homeValue}`);
}
else {
  console.log ('Не может купить дом((')
}

let remainder = total - homeValue + ' $' + ' остаток после покупки дома'; //второй вариант вывода остатка
console.log(remainder);


// Проверка робота 
const res = prompt('Сколько будет 7 + или - 15?');

switch(true) {
  case res === 'Я не робот':
  case Number(res) === 22:
  case Number(res) === -8:
  console.log('Успех');
  break;
  default:
  console.log('Вы робот');
}

// Проверка прав

let balance = 1000;
let bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy = (balance >= 1000 || bonusBalance >= 100) 
&& !isBanned 
&& !isExist 
&& isSelling;

console.log(`Куплено: ${canBuy ? 'Да' : 'Нет'}`);