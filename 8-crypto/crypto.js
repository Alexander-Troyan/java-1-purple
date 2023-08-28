// Домашнее задание "Массивы"

const password = 'Stepik23';
function breakdownPassword(password) {
  const partsPassword = password.split('i'); //Разделяю пароль на 2 части
  console.log(partsPassword);
  // const res = partsPassword.slice(0, 1);
  // console.log(res);
  // console.log(res.reverse());
  console.log(partsPassword.reverse()); // меняю местами части пароля
  console.log(partsPassword.join('i')); //соединияю две части пароля в виде строки с недостающим знаком i
}

breakdownPassword(password);

function checkPassword(password) {
  if (password.includes('k23iStep')) {
    console.log('Пароль верный');
  } else if (password.includes('Stepik23')) {
    console.log('Пароль верный');
  } else {
    console.log('Пароль неверный');
  }
}

checkPassword('wrong');
checkPassword('Stepik23');


// Вопрос 1. При разделении через split удаляется один символ. Как правильно нужно было разделить просто на две переменные?
// Вопрос 2. Я бы потом ещё хотел в каждой переменной сделать reverse символов и уже потом сделать конкатенацию этих переменных. Я пытался сдлеать вместе .indexOf и .revese для каждой переменной, но в лучшем случае просто возвращалось тоже значение переменной без изменений или вообще не работало.
