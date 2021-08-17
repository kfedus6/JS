//alert ('hello js!');

//const message = "hello"; 
//alert(message);

/*const username = prompt('enter your name');
alert('hello ' + username);

const userage = parseFloat(prompt('enter your age'));
alert('your age is ' + userage);

const nextage = add(userage, 1);
alert('next year you will be ' + nextage);

if (userage >= 18) {
    alert('you are adult !');
} else {
    alert('you are underaged! ');
}

function add (a, b) {
    const result = a + b;
    return result;
}*/

/*ЦИКЛ З ЛІЧИЛЬНИКОМ
for (let i = 0; i < 20; i++) {
    console.log(i);
}*/


/*задача виводимо лише парны числа від 2 до 50
for (let counter = 2; counter <= 50; counter += 2) {
    console.log(counter);
}*/

/*цикл з передумовою
let i = 0;
while (i <= 25) {
    console.log(i);
    i++;
}*/


//let num = parseFloat(prompt('Enter a number'));
//while (isNaN(num)) {
//num = parseFloat(prompt('Enter a number'));
//}

//let num;
//do {
//num = parseFloat(prompt('Enter a number'));
//} while (isNaN(num));

/*const cars = ['Tesla X', 'Tesla Y', 'Tesla S', 'Tesla 3'];
cars[4] = 'Mercedes s-class';
cars[5] = 'Audi RS-6';
cars.push('Porsche Panamera');
console.log(cars);

cars.sort();
  for (let i = 0; i < cars.length; i++) {
       console.log(i+1, cars[i]);
}*/

/*let nums = [1, 3, 5, 6, 12, 33, 32, 44, 51, 2, 8, 9];
let result = nums.reduce((sum, current) => sum + current, 0);
alert(result);*/

/*let nums = [1, 3, 5, 6, 12, 33, 32, 44, 51, 2, 8, 9];
nums.reverse();
alert(nums);*/

/*let nums = [1, 23, 44, 32, 24, 54, 77, 3, 45, 62];
nums.sort(compare);
console.log(nums);

function compare(a, b) {
  return a - b;
}*/

/*let nums = [1, 23, 44, 32, 24, 54, 77, 3, 45, 62];
nums.sort(function(a, b) {
  return a - b;
});
console.log(nums);*/

/*let nums = [1, 23, 44, 32, 24, 54, 77, 3, 45, 62];
nums.sort((a, b) => a - b);
console.log(nums);*/


/*let arr = [5, 2, 1, -10, 8, 22, 12, 45, 32, 12, 56, -45];
arr.sort((a, b) => b - a);
alert(arr);*/

/*const teslaS = {};
teslaS.make = 'Tesla';
teslaS.model = 'S';
teslaS.color = 'bluo';
teslaS.price = 1750000;
teslaS.beep = function () {
   console.log('Tesla S beep');
}

console.log(teslaS);
teslaS.beep();

const porscheTaycan = {
   make: 'Porsche',
   model: 'Taycan',
   color: 'yellow',
   price: 240000,
   beep: function () {
      console.log('Porsche Taycan beep');
   }
};

console.log(porscheTaycan);
porscheTaycan.beep();


function Car(make, model, color, price) {
   this.make = make;
   this.model = model;
   this.color = color;
   this.price = price;
}
Car.prototype.beep = function () {
   console.log(`${this.make} ${this.model} beep`);
}
const mercedesG = new Car('Mercedes', 'G', 'black', 280000);
console.log(mercedesG);
mercedesG.beep();
const audiA7 = new Car('Audi', 'A7', 'white', 95000);
console.log(audiA7);
audiA7.beep();

class SuperCar {
   constructor(make, model, color, price) {
      this.make = make;
      this.model = model;
      this.color = color;
      this.price = price;
   }
   beep() {
      console.log(`${this.make} ${this.model} beep`);
   }
}
const ferrari = new SuperCar('Ferrari', '812 Superfast', 'red', 700000);
const ferrarif8 = new SuperCar('Ferrari', 'F8 Tributo', 'green', 600000);
console.log(ferrari);
console.log(ferrarif8);


const carJson =
   `{
  "make": "Ford",
  "model": "Raptor",
  "color": "black",
  "price": 70000
}`;
const carFromJson = JSON.parse(carJson);
console.log(carFromJson);

//let userName = prompt('your name?', '');
//let isTeaWanted = confirm('you want tea?');

//alert('user:' + userName);
//alert('tea:' + isTeaWanted);*/


/*Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.*/

/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pate";
delete user.name;*/


//Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

/*function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}*/

//У нас есть объект, в котором хранятся зарплаты нашей команды:
//Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//Если объект salaries пуст, то результат должен быть 0.

/*let salaries = {
  John: 100,
  Ann: 160,
  Pate: 130,
};

 let sum = 0;
 for (let key in salaries) {
   sum += salaries[key];
 }
 alert(sum);*/


//Создайте объект calculator (калькулятор) с тремя методами:
//read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//sum() (суммировать) возвращает сумму сохранённых значений.
//mul() (умножить) перемножает сохранённые значения и возвращает результат

/*let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
    },

    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/


//calculator з використаням new

/*function Calculator() {

  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );*/

//Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

/*let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    alert(this.step);
    return this;
  }
}

ladder
  .up()
  .up()
  .down()
  .up()
  .down()
  .showStep();*/

//Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.

/*let a = +prompt("Введите первое число", "");
let b = +prompt("Введите первое число", "");

alert(a + b);*/

//Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа:
// 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

//Но почему в примере ниже 6.35 округляется до 6.3?

//alert( 6.35.toFixed(1) ); // 6.3

//Как правильно округлить 6.35?

//alert( (6.35 * 10).toFixed(20) ); // 63.50000000000000000000

//alert( Math.round(6.35 * 10) / 10); // 6.35 -> 63.5 -> 64(rounded) -> 6.4


//Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
//Функция должна возвращать числовое значение.
//Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

/*function readNumber() {
   let num;

   do {
      num = prompt("Введите число", 0);
   } while (!isFinite(num));

   if (num === null || num === '') return null;

   return +num;
}

alert(`Число: ${readNumber()}`);*/

//Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
//Любое число из интервала min..max должно появляться с одинаковой вероятностью.

//1 function
/*function randomInteger(min, max) {
   let rand = min - 0.5 + Math.random() * (max - min + 1);
   return Math.round(rand);
}

alert(randomInteger(1, 100));
alert(randomInteger(1, 100));
alert(randomInteger(1, 100));*/

//2 function

/*function randomInteger(min, max) {
   let rand = min + Math.random() * (max + 1 - min);
   return Math.floor(rand);
}

alert(randomInteger(1, 100));
alert(randomInteger(1, 100));
alert(randomInteger(1, 100));*/

/*let users = [
   { age: 16 },
   { age: 22 },
   { age: 21 },
   { age: 15 },
   { age: 34 },
   { age: 31 },
   { age: 25 },
];

let army = {
   minAge: 18,
   maxAge: 28,
   canJoin(user) {
      return user.age >= this.minAge && user.age < this.maxAge;
   }
};

let soldiers = users.filter(army.canJoin, army);

alert(soldiers.length);
alert(soldiers[0].age);
alert(soldiers[1].age);
alert(soldiers[2].age);*/

//Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет 
//из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//Функция должна изменять принимаемый массив и ничего не возвращать.

/*function filterRangeInPlace(arr, a, b) {
   for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < a || val > b) {
         arr.splice(i, 1);
         i--;
      }
   }
}

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);*/

/*function sortByAge(arr) {
   arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);*/


/*function getAverageAge(users) {
   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let kolya = { name: "Коля", age: 24 };
let oleg = { name: "Олег", age: 22 };

let arr = [vasya, petya, masha, kolya, oleg];

alert(getAverageAge(arr));*/


//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.Иногда это 30, 31 или даже февральские 28 / 29.
//Параметры:
//year – год из четырёх цифр, например, 2012.
//month – месяц от 0 до 11.
//К примеру, getLastDayOfMonth(2012, 1) = 29(високосный год, февраль).

/*function getLastDayOfMonth(year, month) {
   let date = new Date(year, month + 1, 0);
   return date.getDate();
}

alert(getLastDayOfMonth(2021, 0));
alert(getLastDayOfMonth(2021, 1));
alert(getLastDayOfMonth(2021, 2));
alert(getLastDayOfMonth(2021, 3));*/

//Напишите функцию formatDate(date), форматирующую date по следующему принципу:
//Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
//В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
//В противном случае, если меньше часа, вывести "m мин. назад".
//В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.


/*function formatDate(date) {
   let diff = new Date() - date;//різниця в мілісикундах!!!
   if (diff < 1000) { //менше 1 секунди!!!
      return 'прямо зарас';
   }
   let sec = Math.floor(diff / 1000); //різниця в секунду!!!
   if (sec < 60) {
      return sec + ' секунд назад';
   }
   let min = Math.floor(diff / 60000);//різниця в хвилину!!!
   if (min < 60) {
      return min + ' хвилин назад'
   }
   //добавити 0 до дню.місяцю.годині.хвилині.секунді!!!
   let d = date;
   d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
   ].map(component => component.slice(-2));//взяти 2 остані цифри з компонента!!!
   //зєднанти компоненти в дату!!!
   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert(formatDate(new Date(new Date - 1)));
alert(formatDate(new Date(new Date - 30 * 1000)));
alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
alert(formatDate(new Date(new Date - 86400 * 1000)));*/


//Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//Если объект salaries пуст, то результат должен быть 0.

/*function sumSalaries(salaries) {
   let sum = 0;
   for (let salary of Object.values(salaries)) {
      sum += salary
   }
   return sum;
}

let salaries = {
   "John": 100,
   "Pete": 300,
   "Mary": 250,
};

alert(sumSalaries(salaries));*/


//Напишите функцию count(obj), которая возвращает количество свойств объекта:

/*function count(obj) {
   return Object.keys(obj).length;
}

let user = {
   name: "kolya",
   age: 25
};

alert(count(user));*/

