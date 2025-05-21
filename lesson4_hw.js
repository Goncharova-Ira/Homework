/* Task - 1
  Напишіть функцію getFirstChar(str), яка повертає рядок str з першим символом у верхньому регістрі, наприклад: 

  я даю слово "кіт", а мені повертаеться "Кіт"

  *Підказка: використайте slice
*/

function getFirstChar(str) {
    console.log(str.slice(0, 1).toUpperCase().concat(str.slice(1)))
}
getFirstChar('alice')


/* Task - 2
  Напишіть функцію checkSpam(str), яка повертає true, якщо str містить ‘forex’ or ‘crypto’, інакше false

  Функція має бути нечутливою до регістру

  / / / https://www.tiktok.com/@devslopes/video/7154123361671466283 / / /
*/

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('forex') || lowerStr.includes('crypto');
}
console.log(checkSpam("Learn how to trade FOREX"));
console.log(checkSpam("You need to know about Crypto"));
console.log(checkSpam("There is no spam words"));

/* Task - 3
  У нас є вартість у вигляді "$120". Тобто: спочатку йде знак долара, а потім число.
  
  Створіть функцію extractCurrencyValue(str), яка витягне числове значення з такого рядка та поверне його.

  *Підказка: використайте slice
*/

function extractCurrencyValue(str) {
    console.log(str.slice(1))
}
extractCurrencyValue('$120')