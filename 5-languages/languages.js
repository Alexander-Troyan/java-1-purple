
// Домашнее задание "Упарвление потоком"

// Мне сначала было проще записать в таком виде, а уже из него перевести в swith

let language = 'ru';

/* if (language === 'en') {
  console.log('Hello')
} else if (language === 'ru') {
  console.log('Привет')
} else if (language === 'de') {
  console.log('Hallo')
} else if (language === 'sp') {
  console.log('Hola')
} 
else {
  console.log('Я не смог распознать язык');  
} */

// Первый способ switch

 switch(language) {
  case 'en':
      console.log('Hello')
      break;
  case 'ru':
      console.log('Привет')
      break;
  case 'de':
      console.log('Hallo')
      break;
  case 'sp':
      console.log('Hola')
      break;
      default:
      console.log('Я не смог распознать язык');
} 

// Второй способ switch

switch(true) {
  case language === 'en':
      console.log('Hello')
      break;
  case language === 'ru':
      console.log('Привет')
      break;
  case language === 'de':
      console.log('Hallo')
      break;
  case language === 'sp':
      console.log('Hola')
      break;
      default:
      console.log('Я не смог распознать язык');
}