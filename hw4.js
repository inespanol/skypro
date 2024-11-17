// Задание 1 Выведите в консоль 2 раза слово «Привет».
 for (let i = 0; i < 2; i = i + 1) 
   {console.log("Привет")
 }

// Задание 2 Выведите в консоль цифры от 1 до 5.
for (let i = 1; i <= 5; i = i + 1) 
   {console.log(i)
 }

 // Задание 3 Выведите в консоль числа от 7 до 22.
for (let i = 7; i <= 22; i = i + 1) 
   {console.log(i)
 }

 // Задание 4 Есть объект (назовем его obj), который содержит следующие пары ключ-значение: "Коля" : '200' "Вася" : '300' "Петя" : '400' Эти пары представляют собой имена сотрудников и их зарплаты в долларах. Ваша задача написать код, который будет проходиться по всем записям этого объекта и выводить информацию о каждом сотруднике в формате: "имя сотрудника" — зарплата "сумма" долларов.
 const obj = {
   "Коля" : '200',
   "Вася" : '300',
   "Петя" : '400'
 }
 for (let key in obj) {
   console.log(`${key}: ${obj[key]} долларов`);
 }

 // Задание 5 Дано число n=1000. Ваша задача — делить его на 2 до тех пор, пока результат деления не станет меньше 50. Определите, какое число получится в результате.Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную num.
 let n = 1000;
 let num = 0;
 while (n >= 50) {
   n /=2;
   console.log(n);
   num++;
 }
 console.log(`Количество циклов: ${num}`);  

// Задание 6. Создайте переменную, которая хранит в себе номер первой пятницы месяца (число от 1 до 7). Выведите на каждую пятницу месяца (включая полученную) сообщение следующего вида: "Сегодня пятница, ...-е число. Необходимо подготовить отчет." 
let dayFriday = 2;
let allDay = 31;
for (let i = dayFriday; i <= allDay; i +=7) {
   console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}

// Дополнительные задания
//№ 1 Дано число k = 100. Ваша задача — вычитать из него 7 до тех пор, пока результат вычитания не станет меньше 0. Определите, какое число получится в результате. Вычислите количество итераций (проходов цикла), которые потребовались для достижения результата, и запишите это количество в переменную iterations.
let k = 100;
let iterations = 0;
while (k >= 0) {
   k = k - 7;
   iterations++;   
}
console.log("Результат: ", k);
console.log("Количество итераций: ", iterations);

//№ 2 Создайте массив months с названиями всех месяцев года. Напишите программу, которая выводит название каждого месяца и его порядковый номер в году.
let months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
for (let i = 0; i < 12; i++) {
  console.log(`${months[i]} - ${i + 1}`);
}

//№ 3 Создайте объект, описывающий книгу, с такими свойствами как "название", "автор", "год издания", "жанр". Напишите код, который выводит все свойства этого объекта в консоль.
   const book = {
      title: 'Три сестры',
      author: 'Чехов',
      yearPublic: 1969,
      genre: 'пьеса'
    };
     console.log(book.title, book.author, book.yearPublic, book.genre);

   // № 4   Создайте массив из 10 случайных чисел. Напишите код, который находит минимальное число в массиве и выводит его в консоль.

   let numbers = [12, 23, 4, 10, 57, 83, 7, 166, 13, 36];
   let minNumber = numbers[0];
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < minNumber) {
         minNumber = numbers[i];
       }
   }     
     console.log("Массив: ", numbers);
     console.log("Минимальное число: ", minNumber);