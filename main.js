// 1) Створіть змінні для кількості книг у вашій бібліотеці та кількості прочитаних книг. Потім обчисліть відсоток прочитаних книг від загальної кількості книг.
// 2) Створіть змінну для суми грошей у вашому кошельку в гривнях. Потім обчисліть, скільки це буде в євро, якщо курс обміну 1 євро = 42,09 гривень.
// 3) Створіть змінні для цін на страви та напої у ресторані (м'ясо, салат, напій). Обчисліть загальну суму замовлення з урахуванням чайових (15% від суми). 

const amountOfBook = 10;
const amountOfReadBook = 4;
const percentOfReadBook = amountOfReadBook/amountOfBook*100+"%";
console.log(percentOfReadBook)

const amountOfMoneyInPocket = 4595;
const exchangeRateToEuro = 42.09;
const amountOfMoneyInEuro = amountOfMoneyInPocket/exchangeRateToEuro;
console.log(amountOfMoneyInEuro);

const priceOfDrink = 25;
const priceOfMeat = 432;
const priceOfSalad = 232;
const amountOfTips = 1.15;
const bill = (priceOfDrink + priceOfMeat + priceOfSalad) * amountOfTips;
console.log(bill)
