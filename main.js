// Створити об'єкт country двома способами: літерально та за допомогою функції конструктора
// властивості:
// - name (рядок)
// - population (число)
// - area (число)
// методи покласти в прототип
// - getDensity() - повертає число яке є результатом обчислення популяція поділена на площу

// - getInfo() - повертає рядок з повною інформацією про країну (назва, популяція та площа) з описом що виводить і одиницями вимірювання

// const country = {
//     name : "Ua",
//     population : 43000000,
//     area : 603000,
// }

// country.__proto__.getDensity = function(){
//     return this.population/this.area;
// }
// country.__proto__.getInfo = function(){
//     return `${this.name}, ${this.population}, ${this.area}`
// }
// console.log(country.getDensity());
// console.log(country.getInfo())

const countryMethod = {
    getDensity(){
        return this.population/this.area;
    },
    getInfo(){
        return `Country ${this.name}, Population${this.population}, Area ${this.area}`
    }
}
function getCountry(name, population, area){
    this.name = name,
    this.population = population,
    this.area = area
}

getCountry.prototype = countryMethod;
const newCountry = new getCountry("Ua", 43000000, 603000)
console.log(newCountry.getDensity())
console.log(newCountry.getInfo())