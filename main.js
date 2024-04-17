// 1) Написати функцію, яка приймає два значеня і повертає більше значення, якщо значення одного типу, в усіх інших випадках повертає null



function myFunc(num1, num2){
    if(typeof(num1) == typeof(num2) && num1>num2){
        console.log(num1)
    } else if(typeof(num1) == typeof(num2) && num1<num2){
        console.log(num2)
    } else {
        console.log(null)
    }
}
// 2) Написати функцію, яка просить користувача ввести число і виводить повідомлення яке він число ввів: "додатнє", "нуль" або "від'ємне", або виводить повідомлення "це не число"


myFunc(3,2)
function alertNumberInfo(){
    // const alertNumber = prompt("Введіть число");
    const alertNumber = 10;
    if (alertNumber > 0){
        alert("number is positive")
    } else if (alertNumber == 0){
        alert("number is zero")
    } else if (alertNumber < 0){
        alert("number is negative")
    } else {
        alert("not a number")
    }

}
alertNumberInfo();
// 3) Написати функцію, яка приймає параметром число і перевіряє чи є це число дільником 100. Повертає булеве значення.



function getEvenNumber(evenNumber){
    if(evenNumber%100===0){
        console.log("true")
    } else {
        console.log("false")
    }
}
getEvenNumber(1000)

// 4) Написати функцію, яка перевіряє можливість існування трикутника.
// Функція приймає три числа - сторони трикутника, повертає булеве значення. Значення за замовчуванням 3,4,5.
// Трикутник існує тоді і тільки тоді, коли сума довжин будь-яких двох його сторін більша за третю.


function isTriangleExist(num1=4, num2=2, num3=1){
    if((num1+num2) > num3 && (num2+num3) > num1 && (num1+num3) > num2){
        return true;
    } else {
        return false
    }
}

console.log(isTriangleExist())