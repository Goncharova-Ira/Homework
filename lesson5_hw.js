/* Task - 0 

Створіть об'єкт car з наступними властивостями:
- brand (наприклад, "Toyota")
- model (наприклад, "Camry")
- year (наприклад, 2020)
- color (наприклад, "Silver")

1. Додайте до об'єкта нову властивість mileage зі значенням 50000 за допомогою крапки.
2. Змініть значення властивості color на "Black" за допомогою квадратних дужок.
3. Видаліть властивість year за допомогою оператора delete.
4. Виведіть у консоль об'єкт після всіх змін.
5. Перевірте, чи існує властивість model в об'єкті за допомогою оператора in. */

var car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'silver'
};
car.mileage = 50000;
car['color'] = 'black';
delete car.year;
console.log(car)
if ('model' in car) {
    console.log('model exists')
}
else{
    console.log('model doesnt exist')
}


/* Task - 1 

Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод sayHello, який виведе на екран повідомлення «Привіт, мене звуть X, мені 
Y років.»  */

var person = {
    name: 'Iryna',
    sName: 'Honcharova',
    age: 39,
    getInfo: function(){
      for (let key in person){
        if (typeof this[key] === 'string'||typeof this[key] === 'number') {
        console.log(key +' : '+person[key])
      }  
    }
},
    sayHello: function(){
        console.log(`Hello, my name is ${person.name} ${person.sName}, my age is ${person.age}.`)
    }
}
person.getInfo()
person.sayHello()

/* Task - 2

  Створіть об'єкт library з наступними властивостями:
- name (наприклад, "City Library")
- books (масив рядків, наприклад, ["Book1", "Book2", "Book3"])

1. Додайте метод addBook, який приймає назву книги і додає її до масиву books.
2. Додайте метод removeBook, який приймає назву книги і видаляє її з масиву books.
3. Додайте метод listBooks, який виводить у консоль усі книги з масиву books у форматі: "Book: <назва книги>".
4. Викличте метод addBook, додавши нову книгу, наприклад, "Book4".
5. Викличте метод removeBook, видаливши одну з книг.
6. Викличте метод listBooks для виведення списку книг. */

var library = {
    name: 'City Library',
    books: ['Book1', 'Book2', 'Book3'],
    addBook: function (newBook) {
        if (typeof newBook === 'string'||typeof newBook === 'number') {
            this.books.push(newBook)
        }
    },
    removeBook: function () {
        this.books.pop()
    },
    listBooks: function () {
        for (let i = 0; i < this.books.length; i++) {
            const element = library.books[i];
            console.log('Book: ' + element);
        };
    }
};
library.addBook('Book4')
console.log(library.books);
library.removeBook()
console.log(library.books);
library.listBooks()




// ?????(4)
/* Task - 3. Перебір властивостей та методи Object

Створіть об'єкт inventory з наступними властивостями:
- apples: 10
- oranges: 15
- bananas: 20

1. Використовуючи цикл for...in, виведіть у консоль усі ключі та їх значення у форматі: "<ключ>: <значення>".
2. Використайте метод Object.keys для отримання масиву ключів об'єкта та виведіть його в консоль.
3. Використайте метод Object.values для отримання масиву значень об'єкта та обчисліть суму всіх значень (кількості фруктів).
4. Використайте метод Object.entries для виведення пар ключ-значення у форматі: "Fruit: <ключ>, Quantity: <значення>". */


var inventory = {
    apples: 10,
    oranges: 15,
    bananas: 20,    
};
for (let key in inventory){
    console.log(`${key}: ${inventory[key]}`)
}
console.log(Object.keys(inventory));
console.log(Object.values(inventory));
console.log(Object.entries(inventory));


/* Task - 4. Обчислювані імена властивостей

1. Створіть змінну propertyName зі значенням "status".
2. Створіть об'єкт userProfile з властивостями:
- username (наприклад, "user123")
- email (наприклад, "user123@example.com")
- Властивість, ім'я якої береться зі змінної propertyName, зі значенням "active".

3. Виведіть у консоль значення властивості, ім'я якої зберігається в propertyName.
4. Змініть значення propertyName на "role" і додайте нову властивість до об'єкта userProfile зі значенням "admin" за допомогою обчислюваного імені.
5. Перевірте за допомогою hasOwnProperty, чи є в об'єкті властивість "role".
6. Виведіть оновлений об'єкт у консоль. */


var propertyName = 'satus';
var userProfile = {
    userName: "user123",
    email: "user123@example.com",
    [propertyName]: "active"
}
console.log(userProfile[propertyName]);
console.log(userProfile)
propertyName = "role";
userProfile[propertyName] = 'admin';
console.log(userProfile);
propertyName = 'access';
userProfile[propertyName] = true;
console.log(userProfile);
if (userProfile.hasOwnProperty('role')){
    console.log(`Є така властивість`);
} else
    console.log("Немає такої властивості");



/* Task - 5

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price  */

var services = {
    "стрижка": "60",
    "гоління": "80",
    "Миття голови": "100",

    getPrice: function () {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] === 'string') {
                sum += parseFloat(this[key])
            }
        }
        return sum;
    },

    getMinPrice: function() {
        let minPrice = Infinity;
        for (let key in this){
            if (typeof this[key] === 'string'){
                if (minPrice > parseFloat(this[key])){
                    minPrice = parseFloat(this[key])
                }
            }

        }
        return minPrice;
    },


    getMaxPrice: function() {
        let maxPrice = 0;
        for (let key in this){
            if (typeof this[key] === 'string'){
                if (maxPrice < parseFloat(this[key])){
                    maxPrice = parseFloat(this[key])
                }
            }

        }
        return maxPrice;
    },
};
console.log('Total sum: ' + services.getPrice());
console.log('Minimal price: ' + services.getMinPrice())
console.log('Maximum price: ' + services.getMaxPrice())


/* Task - 6. Гетери та сетери

Створіть об'єкт student з властивостями:
- firstName (наприклад, "Anna")
- lastName (наприклад, "Koval")
- course (наприклад, 2)

1. Додайте до об'єкта гетер fullName, який повертає повне ім'я студента у форматі firstName lastName.
2. Додайте сетер fullName, який приймає повне ім'я (рядок) і розбиває його на firstName та lastName.
3. Встановіть нове повне ім'я, наприклад, "Maria Shevchenko", за допомогою сетера.
4. Виведіть у консоль fullName, firstName та lastName після змін.
5. Додайте гетер isSenior, який повертає true, якщо курс студента більше або дорівнює 4, і false в іншому випадку.
6. Виведіть у консоль значення isSenior. */

var student = {
    firstName: 'Anna',
    lastName: 'Koval',
    course: 2,
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        return [this.firstName, this.lastName] = value.split(' ');
    },
    get isSenior() {
        return this.course >= 4;
    }
};
console.log(student.fullName);
student.fullName = "Maria Shevchenko"
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName);
console.log(student.isSenior)


