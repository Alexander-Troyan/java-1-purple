/* Домашнее задание "Основы"*/

//Переменные

const adressLat = 13;
const adressLong = 21;
const positionLat = 10;
const positionLong = 7;

const differenceLat = adressLat - positionLat; // разница координат 1
console.log(differenceLat);

const differenceLong = adressLong - positionLong; // разница координат 2
console.log(differenceLong);

const differenceLatInTwo = differenceLat ** 2; // возведение в степень координаты 1
console.log(differenceLatInTwo);

const differenceLongInTwo = differenceLong ** 2; // возведение в степень координаты 2
console.log(differenceLongInTwo);

const sumCoordinatesSquared = differenceLatInTwo + differenceLongInTwo; //сумма координат в степени
console.log(sumCoordinatesSquared);

console.log(
      Math.sqrt(sumCoordinatesSquared) + ' соствляет расстояние между точками'
); //извлекаем корень и получаем ответ
