// --- Operators ----

/* Task - 1

1. Створіть змінну userInput і ініціалізуйте її значенням "42".
2. Порівняйте userInput з числом 42 за допомогою:
-- Оператора рівності (==).
-- Оператора строгої рівності (===).
3. Виведіть результати порівнянь у консоль разом із поясненнями в коментарях, чому результати такі.*/

let userInput = 42;
console.log(userInput==42);
// (true) оскільки значення змінної дорівнює 42

let userInput = 42;
console.log(userInput===42);
// (true) оскільки значення змінної дорівнює 42 та вони належать до одного типу даних number

/*
4. Створіть змінну emptyString зі значенням "" і порівняйте її з 0 за допомогою == і ===. Поясніть результати в коментарях.*/

let emptyString = '';
console.log(emptyString==0);
// (true) оскільки порожній рядок конвертується у нуль

let emptyString = '';
console.log(emptyString===0);
// (false)  тому, що значення змінної та 0 належать до різних типів данних (string  та number)

/*
5. Порівняйте рядки "apple" і "Apple" за допомогою оператора >. Виведіть результат і поясніть, чому вийшов саме такий результат, посилаючись на Unicode.*/

console.log('apple'>'Apple');
// (true) оскільки a має більший порядковий номер, ніж A в Unicode



/* Task - 2

1. Створіть три змінні: isAdult (наприклад, true), hasTicket (наприклад, false), isVIP (наприклад, true).
2. Використайте логічні оператори &&, || і !, щоб перевірити, чи може людина потрапити на захід. Людина може потрапити, якщо вона:
3. Є дорослою (isAdult) і має квиток (hasTicket) або є VIP (isVIP).
4. Збережіть результат у змінну canEnter і виведіть її в консоль.
5. Використайте оператор ! для створення змінної cannotEnter, яка є протилежною до canEnter. Виведіть її в консоль.
6. Створіть вираз, який перевіряє, чи хоча б одна зі змінних (isAdult, hasTicket, isVIP) є false. Виведіть результат. */

let isAdult = true;
let hasTicket = false;
let isVip = true;
let canEnter = (isAdult&&(hasTicket||isVip));
console.log(canEnter);
let cannotEnter = (!isAdult&&(!hasTicket||!isVip));
console.log(cannotEnter);

console.log(isAdult&&hasTicket&&isVip);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// --- 'if' conditional ---

/* Task - 3

Створіть програму, яка буде зберігати значення ваги кота. 

Якщо кіт важить менше 5 кг, то він маленький і його ще треба годувати, 
якщо більше 5, то кіт дуже пухнастий і його потрібно розчесати :) 

Переписати інструкцію if з використанням умовного оператора '?
*/

let catWeight = 5;
if (catWeight<5) {
  console.log('Погодуй котика');
} else {
  console.log('Причеши котика');
}

/* Task - 4

Напишіть умову if, яка перевіряє, чи значення віку НЕ знаходиться між 18 і 50 включно, якщо це не так, то наймайте людину на роботу. 

Переписати інструкцію if з використанням умовного оператора '? 

%%% https://www.tiktok.com/@devslopes/video/7260261089928105258 %%%%
*/

let age = 14
if (age>=18||age<=50)
  console.log('hire');

   
 /* Task - 5???

Переписати інструкцію if з використанням умовного оператора '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */


/* Task - 6

1. Створіть змінну temperature і ініціалізуйте її числовим значенням (наприклад, 25).
2. Напишіть умовну конструкцію, яка виводить у консоль:
-- "Too cold!", якщо температура нижче 0.
-- "Comfortable", якщо температура від 0 до 25 включно.
-- "Too hot!", якщо температура вище 25.
3. Додайте ще одну умову, яка перевіряє, чи температура дорівнює точно 20, і виводить "Perfect temperature!". */

let temperature = 20;
if (temperature<0) {
  console.log('Too cold!');
} else if ((temperature>=0)&&(temperature<=25)&&(temperature===20))
  {
  console.log('Perfect Temperature');
   } else if ((temperature>=0)&&(temperature<=25)&&(temperature!=20))
   {console.log('Comfortable')
}else { 
  console.log('Too hot!');
}

/* Task - 7 (Тернарний оператор)

1. Створіть змінну age і ініціалізуйте її числовим значенням (наприклад, 16).
2. Використайте тернарний оператор, щоб присвоїти змінній access значення "Allowed", якщо age більше або дорівнює 18, або "Denied", якщо менше.
3. Виведіть access у консоль.
4. Перепишіть цей код, використовуючи звичайний if...else, і порівняйте читабельність.
5. Створіть ще один тернарний оператор, який визначає знижку: "20%", якщо age дорівнює 18, або "10%" в іншому випадку. Виведіть результат. */

let age = 16;
let access = (age>=18) ? 'Allowed' : 'Denied';
console.log(access);

let age = 16;
if (age>=18) {
  console.log('Allowed');
} else {
  console.log('Denied');
}

let age = 16;
let discount = (age===18) ? "20%" : "10%";
console.log(discount);
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// --- 'switch' conditinal ---

/* Task - 9

1. Створіть змінну day і ініціалізуйте її рядковим значенням дня тижня (наприклад, "Monday").
2. Використайте конструкцію switch, щоб вивести у консоль:
-- "Work day", якщо день — "Monday", "Tuesday", "Wednesday", "Thursday" або "Friday".
-- "Weekend", якщо день — "Saturday" або "Sunday".
-- "Invalid day", для всіх інших значень.
3. Переконайтеся, що switch використовує строге порівняння (===).
4. Протестуйте код із числовим значенням (наприклад, day = 1) і поясніть у коментарі, чому результат такий. */

let day = true;
switch (day) {
  case (('Monday')||('Tuesday')||('Wednesday')||('Thursday')||('Friday')):
    console.log('Work Day');
    break;
  case (('Saturday')||('Sunday')):
    console.log('Weekend');
    break;
  default:
    console.log('Invalid Day');
}


/* Task - 8??????
Перепишіть "if" на "switch"

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/

let age = 41;
switch (true) {
  case (age<16):
    console.log('We cannot hire u!');
    break;
  case (age>=18):
    console.log('U can take full time job!');
    break;
  case ((age == 16) || (age == 17)):
    console.log('U can take part time job!');
    break
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let temperature = 20;
let temperatureResult = (temperature >=25) ? 'hot' : 'cold';
console.log(temperatureResult);

