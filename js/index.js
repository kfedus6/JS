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

//let nums = [1, 23, 44, 32, 24, 54, 77, 3, 45, 62];
//nums.sort( (a, b) => a - b);
//console.log(nums);

const teslaS = {};
teslaS.make = 'Tesla';
teslaS.model = 'S';
teslaS.color = 'bluo';
teslaS.price = 1750000;
teslaS.beep = function() {
  console.log('Tesla S beep');
}

console.log(teslaS);
teslaS.beep();

const porscheTaycan = {
  make: 'Porsche',
  model: 'Taycan',
  color: 'yellow',
  price: 240000,
  beep: function() {
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
 Car.prototype.beep = function() {
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
//alert('tea:' + isTeaWanted);


/*Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.*/

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pate";
delete user.name;


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