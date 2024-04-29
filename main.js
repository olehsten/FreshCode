// let numFromUser = prompt("ВВеди тайємне число")
let countOfTry = 0;
const secretNum = 7;
function guessSecretNum(num){
    countOfTry++;
    if(!isNaN(num)){
        if(num > secretNum){
            console.log("Таємне число менше")
            let numFromUser = prompt("ВВеди new тайємне число")
            guessSecretNum(numFromUser)
        } else if (num < secretNum){
            console.log("Таємне число більше")
            let numFromUser = prompt("ВВеди new тайємне число")
            guessSecretNum(numFromUser)
        } else {
            console.log(`Ви вгадали таємне число, кількість спроб ${countOfTry}`)
        }
    } else {
        console.log("введіть число")
        let numFromUser = prompt("ВВеди new тайємне число")
        guessSecretNum(numFromUser)
    }
}
// guessSecretNum(numFromUser);

const myNumber = 100;
for(let i = myNumber; i > 0; i--){
    if(i%9===0){
        console.log(`Число ${i}`)
    }
}