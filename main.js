// Початковий список покупок 
const shoppingList = ["milk", "eggs", "bread"];
// Всі завдання виконувати в наведеному порядку, після кожного завдання логувати отриманий результат
// Використовувати лише перелічені методи: pop, push, shift, unshift, slice, splice, indexOf, lastIndexOf
// - Додайте новий елемент в кінець списку 
shoppingList.push("water")
shoppingList.push("water")
console.log(shoppingList)
// - Видаліть останній елемент зі списку
shoppingList.pop();
console.log(shoppingList)
// - Додайте новий елемент на початок списку 
shoppingList.unshift("lemon")
console.log(shoppingList)
// - Видаліть перший елемент зі списку
shoppingList.shift();
console.log(shoppingList)
// - Створіть повну копію списку покупок 
const newList = [...shoppingList]
console.log(newList)
// - Знайдіть індекс  "bread"
console.log(shoppingList.indexOf('bread'))
// - Заменіть "bread" на "muffin"
// shoppingList.splice(2,1,"muffin")
console.log(shoppingList)
// - Знайдіть індекс  "bread" останнє входження
console.log(shoppingList.lastIndexOf("bread"))
// - Після молока додайте "meat", "fish"
shoppingList.splice(1,0,"meat", "fish")
console.log(shoppingList)
// - Видаліть "eggs"
shoppingList.splice(3,1)
console.log(shoppingList)

