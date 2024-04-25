function familyCounter() {
    let countMembers = prompt("ВВедіть будь ласка кількість осіб в родині числом, наприклад 3");
    const listOfFamily = {}
    if(!isNaN(countMembers) && countMembers > 0) {
        for (let i = 0; i < countMembers; i++) {
            let famMember = prompt("Введіть статус особи в родина, наприклад father");
            listOfFamily[famMember];
            const amountOfNamePerMember = 1;
            for(let i = 0; i < amountOfNamePerMember; i++){
                let famMemberName = prompt("Введіть ім‘я особи в родині, наприклад Ігор");
                listOfFamily[famMember] = famMemberName;
            }
        }
        return listOfFamily;
    } else {
        alert("Ввели неправильне число, введіть коректне");
        return familyCounter();
    }
}
let result = familyCounter();
console.log(result)
