// Домашнее задание "Функции"

function converterMoney(sumMoney, currencyNow, desiredCurrency) {

  let rateUSD = 95.16;
  let rateEUR = 102.16;
  let rateRUB = 1;

  sumMoney = sumMoney ?? 1000;

  switch (currencyNow) {
    case '$':
      return rateUSD;
    case 'EUR':
      return rateEUR;
    case 'руб':
      return rateRUB;
  }

  switch (desiredCurrency) {
    case '$':
      return rateUSD;
    case 'EUR':
      return rateEUR;
    case 'руб':
      return rateRUB;
  }

  return (sumMoney * currencyNow) / desiredCurrency;
}

console.log(converterMoney(1000, '$', 'EUR'));
