/*TASK 1 */
// const x = 1;
// const x = 'hello';
// console.log(x);//Ошибка ' Duplicate declaration "x" '

/**TASK 2 */
// let b = 20;

// if (true) {
//   console.log(b);
//   let b = 10;
// }//Ошибка 'ReferenceError: b is not defined'

/**TASK 3 */
// const x;
// x = 1;
// console.log(x);//Ошибка 'Missing initializer in const declaration'

/**TASK 4 */
// const MAX = 10;
// let amount = 0;

// while (amount++ < MAX) {
//   let sum = amount;
// }

// console.log(sum);//Ошибка 'ReferenceError: sum is not defined'

/**TASK 5  */
// const person = {
//     firstName: 'bob',
//     showName() {
//       console.log(this.firstName);
//     },
//   };
  
//   const foo = function(callback) {
//     callback();
//   };
  
//   foo(person.showName);//Будет ошибка

/**TASK 6 */
// const person = {
//     age: 10,
//     setAge(newAge) {
//       this.age = newAge;
//     },
//     refreshAge(userId) {
//       fetchAgeFromDb(function(newAge) {
//         this.setAge(newAge);
//       });
//     },
//   };
  
//   function fetchAgeFromDb(cb) {
//    cb(20);
//   }
  
//   person.refreshAge();
//   console.log(person.age);//Ошибка 'this.setAge is not a function'

/**TASK 7 */
// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum);//20

/**TASK 8 */
// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer);//38

/**TASK 9 */
// const multiplyByValue = (value, base, ...numbers) => {
//     return numbers.map(number => number * value + base);
//   };
//   console.log(multiplyByValue(2, 100, 1, 5, 20, 10))//[102, 110, 140, 120]

/*TASK10 */
// const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
// console.log(names);//[ 'bob', 'donald', 'suzy', 'lacy', 'richard', 'alex']

/*TASK 11*/
// const min = Math.min(...[1, 5, -1, -10]);
// console.log(min);//-10

/*TASK 12*/
// const name = 'bob';
// const age = 20;
// const obj = { name, age };
// console.log(obj);//{name: "bob", age: 20}

/**TASK 13 */
// const confused = 'no';
// const myKey = confused;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);//{no: false}

/**TASK 14 */
// const piece = {
//     x: 0,
//     y: 0,
//     move(x, y) {
//       this.x = x;
//       this.y = y;
//     },
//   };
  
//   piece.move(10, 10);
//   console.log(piece);//{x: 10, y: 10, move: function}

/**TASK 15 */
// const [first, , third] = 'hello sweet world'.split(' ');
// console.log(first, third);//"hello", "world"

/**TASK 16 */
// const { name, age, gender = 'm', hairColor: color } = {
//     name: 'bob',
//     age: 20,
//     hairColor: 'blue',
//    };
   
//    console.log(name, age, gender, color);//'bob', 20', 'm', 'blue';

/**TASK 17 */
// const dog = { name: 'Poly' };

// function showDogName() {
//   console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);

// boundShowDogName();//'Poly'

/**TASK 18 */
// const userA = {
//     name: 'Mango',
//     age: 5,
//   };
  
//   const userB = {
//     ...userA,
//     age: 10,
//     happy: true,
//   };
  
//   console.log(userB);//{name: "Mango", age: 10, happy: true}

/**TASK 19 */
// const fn = (arr, val) => arr.filter(el => el > val);

// console.log(fn([1, 2, 3, 4, 5], 3));//[4, 5] (2)

/**TASK 20 */
// Какой метод массива используется для поиска уникального элемента коллекции?
// Array.prototype.find()

/**TASK  21 */
// const fn = arr => arr.map(el => {
//     const item = document.createElement('div');
//     item.textContent = el;
  
//     return item;
//    });
//   console.log(fn(['html', 'css', 'js', 'react']));// [<div><div><div><div></div>]
  
  /**TASK 22 */
//   Метод Array.prototype.map() всегда вернет массив такой же длины как и исходный?// DA
  
  /**TASK 23 */
//   Метод Array.prototype.filter() .
// перебирает массив, записывая в новый массив те элементы исходного, на итерации которых callback-функция вернула true
  
/**TASK 24 */
// Метод Array.prototype.filter() возвращает...//всегда массив

/**TASK 25 */
// Что из перечисленного не является ложным (Falsy) значением?//"false"

/**TASK 26 */
// Выберите синтаксически верную запись тернарного оператора.
// const a = b || c ? b + c : b - c;

/**TASK 27 */
// Как получить список всех ключей объекта obj?
// Object.keys(obj)

/**TASK 28 */
// Статические свойства класса это...
// свойства доступные только классу, но не его экземплярам

/**TASK 29 */
// Какое ключевое слово реализует наследование классов в ES6?//extends

/**TASK 30 */
// Что делает super() в конструкторе класса?//Вызывает конструктор родительского класса

/**TASK 31 */
// В ES6 классе, super() необходимо вызвать...//до первого обращения к ключевому слову this в теле конструктора

/**TASK 32 */
// Что такое обещание (promise)?//
// Это объект, представляющий конечный результат асинхронной операции

/**TASK 33 */
// Что возвращает метод Promise.prototype.then()?//
// Обещание (promise)

/**TASK 34 */
// Какой метод JSON преобразует объект в строку?//stringify()

/**TASK 35 */
// Что возвращает метод fetch()?//Обещаение (promise)

/**TASK 36 */
// Выберите не существующий HTTP-метод//GRAB

/**TASK 37 */
// Какой символ URL-строки указывает на начало списка параметров запроса?//  ?

/**TASK 38 */
// NPM это...//менеджер пакетов, который используется Node.js приложениями

/**TASK 39 */
// Выберите описание package.json//Это точка входа в проект для Node.js приложений

/**TASK 40 */
// Какой командой будет запускаться npm скрипт с именем"qwerty"?//
// npm run qwerty

/**TASK 41 */
// Какие 2 типа экспорта модулей существуют в ESM (ECMAScript Modules)?//
// named export и default export

/**TASK 42 */
// Что делает следующий код?
// import { a, b } from 'lib';//
// Используя декструктуризацию объекта, получит из модуля lib, экспорты с именами a и b

/**TASK 43 */
// Выберите верную запись импорта всех именованных экспортов модуля someModule в виде одного объекта//
// import * as obj from 'someModule'
