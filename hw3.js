// Задание 1
let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (userPassword === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

// Задание 2
let c = Number(prompt('Введите число'));
if (c > 0 && c < 10) {
    console.log("Верно");    
} else {
    console.log("Неверно"); 
}

// Задание 3
let d = 200;
let e = 8;
if (d > 100 || e > 100) {
    console.log("Верно"); 
} else {
    console.log("Неверно");  
}

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Лето");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осень");
        break;
    default:
        console.log("Неверно");
        break;
}

// Дополнительные задания
// №1
let evenNumber = Number(prompt("Пожалуйста, введите любое число"))
if (isNaN(evenNumber)) {
    console.log("Это не число");
} else {
    if (evenNumber % 2 == 0) {
    alert("Четное число");    
    } else {
    alert("Нечетное число");     
    }
}

// №2
let clientOS = 0;
if (clientOS === 0) {
    alert ("Установите версию приложения для iOS по ссылке")
} else {
    alert ("Установите версию приложения для Android по ссылке")
}

// №3
let clientOSS = 0;
let clientDeviceYear = 2015;
if (clientOSS === 0 && clientDeviceYear < 2015) {
alert("Установите облегченную версию приложения для iOS по ссылке");  
} else if (clientOSS === 0) {
    alert ("Установите версию приложения для iOS по ссылке"); 
} else if (clientOS === 1 && clientDeviceYear <= 2015) {
    alert("Установите облегченную версию приложения для Android по ссылке");
} else {
    alert("Установите версию приложения для Android по ссылке");
}
