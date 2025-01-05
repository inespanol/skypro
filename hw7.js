//Задание 1
//Преобразовать строку 'js' в верхний регистр.
let str = 'js';
str = str.toUpperCase();
console.log(str);

//Задание 2
//Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.
function filterArray(array, str) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().startsWith(str.toLowerCase())) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filterArray(['Hello', 'hellen', 'good bye'], 'hell'))

//Задание 3
//Округлить число 32.58884: До меньшего целого. До большего целого. До ближайшего целого.
let number = 32.58884;
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

//Задание 4
//Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.
const arr = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...arr));
console.log(Math.min(...arr));

//Задание 5
//Создать функцию, которая выводит в консоль случайное число от 1 до 10.
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(getRandomNumber());

//Задание 6
//Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.
function getRandomArray(n) {
    const result = [];
    for (let i = 0; i < n / 2; i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}
const array = getRandomArray(6);
console.log(array); 

//Задание 7
//Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.
function getRandomNumberInRange(min, max) {
    const randomNumber = Math.round(min + Math.random() * (max - min));
    console.log(randomNumber);
  }
  getRandomNumberInRange(4, 15); 

//Задание 8
//Вывести в консоль текущую дату.
let currentDate = new Date();
console.log(currentDate);

//Задание 9
//Создать переменную currentDate, хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.
let currentDate1 = new Date();
currentDate1.setDate(currentDate1.getDate() + 73);
console.log(currentDate1);

//Задание 10
//Написать функцию, которая принимает дату и возвращает ее в формате: Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//Время: [часы]:[минуты]:[секунды]
function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDate()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `
    Дата: ${day} ${months[month]} ${year} - это ${dayOfWeek}
    Время: ${hours}:${minutes}:${seconds}`;
}
console.log(formatDate(new Date()));