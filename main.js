// 1) Якщо значення змінної number позитивне або 0 - виводимо ''positive", інакше - "negative"
 
// 2) Є дві змінні - num1 і num2. Якщо num1>num2 - вивести результат віднімання (num1-num2), інакше - вивести результат множення (num1*num2)
 
// 3) Якщо значення змінної кратно(тобто ділиться без остачі) на 7 і одночасно кратно 3 - виводимо "you win!", інакше - "you loose"
let number = 0;
if(number =>0){
    console.log("positive")
} else {
    console.log("negative")
}

const num1 = 6;
const num2 = 5;
if(num1>num2){
    console.log(num1 - num2)
} else {
    console.log(num1*num2)
}

const specialNum = 20;
if(specialNum%7===0 && specialNum%3===0){
    console.log('you win')
} else {
    console.log('you loose')
}