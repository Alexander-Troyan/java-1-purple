// Домашнее задание "Функции"

function currencyConverter(from, to, amount = 1000) {
  let rubInUsd = 95.16;
  let usdInRub = 94.8;
  let rubInEur = 102.56;
  let eurInRub = 102.0;

  switch (`${from}/${to}`) {
    case 'RUB/USD':
      return amount / rubInUsd;
    case 'USD/RUB':
      return amount * usdInRub;
    case 'RUB/EUR':
      return amount * rubInEur;
    case 'EUR/RUB':
      return amount * eurInRub;
    default:
      return null;
  }
}
console.log(currencyConverter('CNY', 'RUB'));
