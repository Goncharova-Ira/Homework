/* Task - 1

    Створіть масив (array1) з 5 любих елементів
    Створіть функцію, яка буде повертати другий елемент з масиву


    
*/

var array1 = ['love', 'joy', 'fun', 'happiness', 'awe'];
function getSecondElement(arr) {
  return element = arr[2]
}
console.log(getSecondElement(array1))

/* Task - 2

    Створіть функцію, яка додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")

*/


function addingElement(element) {
  array1.push(element);
  return array1;
}
console.log(addingElement('excitement'))





/* Task - 3

    Створіть функцію, яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30 не використовуйте цикли

*/

var team = [
  { name: "John Snow", age: 45 },
  { name: "Cersei Lannister", age: 32 },
  { name: "Daenerys Targaryen", age: 18 },
  { name: "Jorah Mormont", age: 28 }
]

var countYoungJohn = team.filter(checker).length;
function checker(item) {
  return (item.age < 30 || item.name.includes("John"))
}
console.log(countYoungJohn)


/* Task - 4

    Створити функцію для знаходження індексу мінімального елементу масиву, 
    а також виведе суму всіх елементів массиву.

*/

var values = [10, 20, 4, 6, 11, 9, 125, -1, 8, 0, 3];
var getMaxValue = function () {
  let maxValue = values[0];
  for (const i of values) {
    if (i > maxValue) {
      maxValue = i
    }
  }
  console.log(maxValue)
}

var getIndexOfMin = function () {
  let minValue = values[0];
  for (const i of values) {
    if (i < minValue) {
      minValue = i
    }
  }
  console.log(values.indexOf(minValue))
}

getSum = function () {
  let sum = 0;
  for (const i of values) {
    sum += i;
  }
  console.log(sum)
}
getMaxValue()
getIndexOfMin()
getSum()



/* Task - 5

1. Створіть масив books з назвами 5 книг (наприклад, ["1984", "To Kill a Mockingbird", "Pride and Prejudice", "The Great Gatsby", "Moby Dick"]).
2. Додайте нову книгу в кінець масиву за допомогою методу push.
3. Видаліть останню книгу з масиву за допомогою методу pop і виведіть її в консоль.
4. Додайте нову книгу на початок масиву за допомогою методу unshift.
5. Видаліть першу книгу з масиву за допомогою методу shift і виведіть її в консоль.
6. Виведіть довжину масиву після всіх змін за допомогою властивості length.
7. Використайте метод slice, щоб створити новий масив, який містить книги з індексів 1 по 3, і виведіть його в консоль.

*/

var books = ["1984", "To Kill a Mockingbird", "Pride and Prejudice", "The Great Gatsby", "Moby Dick"];
books.push("Madame Bovary");
console.log(books);
let last = books.pop();
console.log("pop result " + last);
books.unshift("Madame Bovary");
let first = books.shift();
console.log(first);
console.log(books)
console.log(books.length)
let books1 = books.slice(1, 3)
console.log(books1)


/* Task - 5    

   Створити функцію, яка поверне кількість допустимих (НЕ not null/undefined) значень масиву

*/


/* Task - 6

   Створити функцію, яка відфільтрує нульові та невизначені значення
   якщо кількість невірних записів більше 3 - потрібно згенерувати помилку "Дані потрібно переглянути"

*/
let values = [10, 20, undefined, -2, 6, 0, 11, -10, 125, null, -3, 8, null, 0, 3, null, undefined];
let getInvalidValue = function (arr) {
  let countInvalid = 0;
  for (const i in arr) {
    let value = arr[i]
    if (value === undefined || value === null || value === 0) {
      countInvalid++;
      console.log(value)
    }
  }
  if (countInvalid > 3) {
    console.log("кілкість невалідних даних: " + countInvalid)
    console.log("Дані потрібно переглянути")
  } else {
    console.log("Дані валідні")
  }
}
getInvalidValue(values)

/* Task - 7 

   Створити функцію, яка знайде в массиві всі від'ємні значення та замінить їх на значення 0.
   
   Після цього виведіть всі значення массиву.

*/

let values = [10, 20, -2, 6, 11, -10, 125, -3, 8, 0, 3];
let replaceNegative = function (arr) {
  for (const i in arr) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  console.log(arr);
}
replaceNegative(values)


/* Task - 8 

Дано массив. 
Створіть на основі значень цього массиву два нових массиви. 
В один массив помістіть всі парні значення, а у другий всі непарні.
Виведіть на екран значення, які війшли в перший массив та у другий массив.

*/
1

let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
const evenNumbers = values.filter((number) => number % 2 === 0);
const oddNumbers = values.filter((number) => number % 2 !== 0);
console.log("Even umbers = ", evenNumbers);
console.log("Odd umbers = ", oddNumbers);

2
let values = [10, 20, 5, 7, 11, 8, 125, 4, 8, 3, 23];
function separateEvenOdd(numbers) {
  const even = [];
  const odd = [];

  for (let num of numbers) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  console.log("Парні числа:", even);
  console.log("Непарні числа:", odd);
}
separateEvenOdd(values)




/* Task - 9

Знайдіть перший позитивний елемент массива та виведіть його на екран.

*/

let values = [-1, -5, -6, -3, -10, -5, 3, 4, -1, -8, 1, -10, 3];
for (let value of values) {
  if (value > 0) {
    console.log(value)
    break
  }
}


/* Task - 10

  Дано массив. Знайдіть середнє арифметичне значення цього массиву.
  Виведіть на екран тільки ті значення, які більше цього цього середнього арифметичного значення.
        
  */

let values = [10, 20, 48, 6, 11, 9, 125, 1, 8, 0, 3, 255, 77, 11, 170, 4, 28];

let sum = 0
for (let i of values) {
  sum += i
}
let averege = parseInt(sum / values.length)
console.log('Averege: ' + averege)
for (let i of values) {
  if (i > averege) {
    console.log('Значення вище середнього: ' + i)
  }
}


/* Task - 11

        Дано массив. 
        Переставте елемент з максимальним значенням місцями з елементом з мінімальним значенням.

*/
var values = [10, 125, 4, 6, 11, 9, 20, 1, 8, 0, 3];
function swapMaxMin(arr) {
let maxIndex = 0;
let minIndex = 0;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[maxIndex]) {
    maxIndex = i;
  }
  if (arr[i] < arr[minIndex]) {
    minIndex = i;
  }
}
let temp = arr[maxIndex];
  arr[maxIndex] = arr[minIndex];
  arr[minIndex] = temp;

  return arr;
}
let result = swapMaxMin(values);
console.log("Масив після обміну:", result);


/*  Task - 12

Опис ДЗ: Уявімо собі, що ми є власниками великої компанії, 
яка розробляє платформу для продажу квитків. 

Окрім того, наша компанія продає рішення для організації продажу цих квитків. 
Таким чином, у нас будуть клієнти, які придбають наше програмне забезпечення (ПО). 
По суті, ці клієнти будуть подібні до "дочірніх компаній" (subCompany), 
які вже використовують наше ПО для продажу квитків. 

Крім цього, ці "дочірні компанії" також можуть стати постачальниками цього рішення, 
і в цьому випадку вони вже будуть "внучатами компанії" (subSubCompany), і так далі і далі */

const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків'
    }
  ]
};

// Вам необхідно написати функцію findValueByKey(companyName), яка буде приймати значення у вигляді companyName та надавати інформацію про цю subCompany.
