/* Task - 1

    Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

    Наприклад,,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
*/
function findMin(a,b){
    if (a < b){
    console.log(a);
} else if (a > b){
    console.log(b);
} else {
    console.log('numbers are equal')
}
}
findMin(-5,-5)

/* Task - 2
  
 Створіть змінну, яка буде повертати функцію
 яка отримує параметр у вигляді числа (де 1 означає піцу, 2 - спагетті і 0 - рамен)
 і повертає текст, наприклад, «Мій обід на сьогодні - піца»
 
 Використання виразу функції зі стрілочним позначенням функції

    @ @ @ https://www.tiktok.com/@devslopes/video/7332200215258238251 @ @ @  */


function getLunch(option){
    if (option == 1){
        console.log('My lunch is pizza')
} else if (option==2) {
        console.log('My lunch is spaghetti')
} else console.log('My lunch is ramen')
}
getLunch(0);
getLunch(1);
getLunch(2);

let getLunch = (option) => {
    if (option == 1){
        console.log('My lunch is pizza')
} else if (option==2) {
        console.log('My lunch is spaghetti')
} else console.log('My lunch is ramen')
}



/* Task - 3
    
    Напишіть функцію printOddNumbers, яка приймає число limit і виводить усі непарні числа від 1 до limit за допомогою циклу for. 
    
    Використовуйте continue, щоб пропускати парні числа. */

function printOddNumbers(limit) {
    for (let i = 1; i <= limit; i++) {
        if (i % 2) console.log(i)
        else continue;
}
}
printOddNumbers(16);


/* Task - 4 (Вкладені цикли з міткою)

Напишіть функцію multiplicationTable, яка виводить таблицю множення для чисел від 1 до n, але зупиняє вивід для кожного числа,
коли результат множення перевищує 50. 

Використовуйте мітку для керування зовнішнім циклом. */

function multiplicationTable(n){
    outer: for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let result = i * j;
            if (result > 50) {
                continue outer;
            }
        console.log("Результат множення " + i + " * " + j + " = " + result)
        }
}
}
multiplicationTable(15)

function multiplicationTable(n) {
  outer: for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let result = i * j;
      if (result > 50) {
        continue outer; // переходимо до наступного i, якщо результат перевищує 50
      }
      console.log(`${i} x ${j} = ${result}`);
    }
  }
}
multiplicationTable(7)

/* Task - 5 (Callback)
    
    Створіть функцію (наприклад, function1), яка отримує в якості аргументу іншу функцію (наприклад, function2)
    і повертає результат виконання цієї іншої функції у форматі рядка
 
    Приклад,
    якщо function2 повертає «ЦЕ РЕЗУЛЬТАТ ВИКОНАННЯ ФУНКЦІЇ ВИКЛИКУ»
    то function1 повинна повертати «Результат = ЦЕ РЕЗУЛЬТАТ ФУНКЦІЇ ВИКЛИКУ» */

    function function1(func) {
    return "Результат = " + func();
}
    function function2() {
    return "ЦЕ РЕЗУЛЬТАТ ВИКОНАННЯ ФУНКЦІЇ ВИКЛИКУ";
}
console.log(function1(function2));




/* Task -  6

    Створіть функцію, яка повертає слово google з заданою кількістю символів «o»

    Приклад,
    funcName(7) // => gooooooogle  */

    function funcName(number) {
        for (let i = 1; i <= number; i++){
           let name = ('g'+ i*'o'+'gle')
           console.log(name)
        }
    }
funcName(3)

/* Task -  7
    Створіть програму, яка генерує простий "калькулятор знижок" для магазину. Програма має:
    
    1. Приймати ціну товару та кількість одиниць.
    2. Обчислювати знижку за правилом:
    --- Якщо кількість товарів >= 5, знижка 10%.
    --- Якщо кількість товарів >= 10, знижка 20%.
    --- Інакше знижки немає.
    3. Використовувати цикл для обробки кількох товарів (наприклад, запитувати у користувача, чи хоче він додати ще один товар).
    4. Використовувати функції для обчислення знижки та виведення результату.
    5. Передбачити обробку некоректних вхідних даних (наприклад, від’ємна ціна чи кількість).  
    
    Приклад роботи програми:
    Товар 1: ціна = 100, кількість = 5
    Знижка: 10%, Загальна сума: 450
    Додати ще товар? (y/n): n
    Фінальна сума: 450
*/

let discount
function culcDiscount(price,quantity){
        if (quantity >= 10) {
            return 0.2;
        } else if (quantity >=5) {
            return 0.1;
        } else {
            return0;
        }
    }

let discountRate = culcDiscount(price,quantity)













