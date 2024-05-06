// снує масив:
const books = [
{ title: "1984", author: "Джордж Оруелл", genre: "Соціальна фантастика", pages: 328 },
{ title: "Колгосп тварин", author: "Джордж Оруелл", genre: "Соціальна фантастика", pages: 286 },
{ title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 256 },
{ title: "Гаррі Поттер і таємна кімната", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 336 },
{ title: "Гаррі Поттер і в'язень Азкабану", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 448 },
{ title: "Гаррі Поттер і келих вогню", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 608 },
{ title: "Гаррі Поттер і орден Фенікса", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 864 },
{ title: "Гаррі Поттер і Принц-півкров", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 704 },
{ title: "Гаррі Поттер і смертельні реліквії", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 608 },
{ title: "Франкенштейн", author: "Мері Шеллі", genre: "Жахи", pages: 280 },
{ title: "Три товариші", author: "Еріх Марія Ремарк", genre: "Роман", pages: 592 },
{ title: "Матильда", author: "Роальд Даль", genre: "Дитяча література", pages: 240 },
{ title: "Маленький принц", author: "Антуан де Сент-Экзюпери", genre: "Філософська проза", pages: 96 },
{ title: "Триумфальна арка", author: "Еріх Марія Ремарк", genre: "Роман", pages: 515 },
{ title: "Американський психопат", author: "Брет Істон Елліс", genre: "Художній роман", pages: 399 },
{ title: "Коротка історія часу", author: "Стивен Гокінг", genre: "Наукова література", pages: 256 },
{ title: "Заводи", author: "Тед Х'юз", genre: "Історія", pages: 672 },
{ title: "Смерть в Венеції", author: "Томас Манн", genre: "Психологічний роман", pages: 128 },
{ title: "Вікторія", author: "Дейв Ітонс", genre: "Альтернативна історія", pages: 592 },
{ title: "Таємниці Старого Норвегії", author: "Дерек Б. Міллер", genre: "Фентезі", pages: 656 },
{ title: "Дивна смерть", author: "Пол К. Фейр", genre: "Детектив", pages: 384 },
{ title: "Війна майбутнього", author: "Герберт Йенс", genre: "Наукова фантастика", pages: 384 },
{ title: "Думка", author: "Стівен Кінг", genre: "Жахи", pages: 432 },
{ title: "Воно", author: "Стівен Кінг", genre: "Жахи", pages: 502 },
]

// 1) Поверніть перший об'єкт з жанру Роман
// function bookGenre(arr){
//     const newBooks = []
//     for (const element of arr) {
//         if(element.genre === "Роман"){
//             newBooks.push(element)
//         }
//     }
//     return newBooks[0]
// }
// console.log(bookGenre(books))

// 2) Поверніть останній індекс об'єкту з жанру Роман
// const lastIndex = books.lastIndexOf(books => books.genre === "Роман")
// console.log(lastIndex)
// 3) Поверніть масив книг з жанром Фентезі де кількість сторінок більше 600
// function booksReturn(arr){
//     const newArr = [];
//     for (const iterator of arr) {
//         if(iterator.genre === 'Фентезі' && iterator.pages > 600){
//             newArr.push(iterator)
//         }
//     }
//     return newArr;
// }
// console.log(booksReturn(books))
// 4) Поверніть масив з назв книг
// function returnBooksName(arr){
//     const booksName = [];
//     for (const iterator of arr) {
//         booksName.push(iterator.title)
//     }
//     return booksName
// }
// console.log(returnBooksName(books))
// 5) Напишіть функцію, яка приймає аргументи: масив книг books, автора і жанр, і повертає масив назв книг(переданого автора і жанру) 
// function bookReturn(arr, author, genre){
//     const namesOfAuthorBooks = [];
//     for (const iterator of arr) {
//         if(iterator.author === author && iterator.genre === genre){
//             namesOfAuthorBooks.push(iterator.title)
//         }
//     }
//     return namesOfAuthorBooks;   
// }
// console.log(bookReturn(books, "Дж. К. Роулінг", "Фентезі"))
// 6) Порахуйте кількість книг з жанром Фентезі (треба фільтром отримати новий масив і дістати його довжину)
// const arrOfFantasyBooks = [];
// for (const iterator of books) {
//         if(iterator.genre === "Фентезі"){
//             arrOfFantasyBooks.push(iterator.title)
//         }
//     }
//     console.log(arrOfFantasyBooks.length)
// 7) Порахуйте кількість книг з кількість сторінок від 200 до 400
// let amoutOfBook = 0;
// for (const iterator of books) {

//     if(iterator.pages >=200 && iterator.pages <= 400){
//         amoutOfBook++;
//     }
// }
// console.log("Кількіість книг зі сторінками від 200 до 400 - ", amoutOfBook)
// 8) Знайдіть книжку з найменшою кількістю сторінок (треба відсортувати та вивести елемент з індеком 0)
const sortedBooks = books.sort((a,b) => a.pages - b.pages)
console.log(`Book with fewest pages is ${sortedBooks[0].title}`)