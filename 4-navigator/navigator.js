
/* Домашнее задание 
      "Основы"*/

//Переменные 

let adressLat = 13;
let adressLong = 21;
let positionLat = 10;
let positionLong = 7;

let differenceOne = adressLat - positionLat; // разница координат 1
      console.log(differenceOne);
      
let differenceTwo = adressLong - positionLong; // разница координат 2
      console.log(differenceTwo);

let squared1 = differenceOne **2; // возведение в степень координаты 1
      console.log(squared1);

let squared2 = differenceTwo **2; // возведение в степень координаты 2
      console.log(squared2);

let sumsSquared = squared1 + squared2; //сумма координат в степени
      console.log(sumsSquared);

      console.log(Math.sqrt(sumsSquared) + ' соствляет расстояние между точками'); //извлекаем корень и получаем ответ


