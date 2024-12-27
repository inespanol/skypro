//Сгенерируйте случайное число от 1 до 100.
// Предложите пользователю угадать это число.
// Дайте подсказки: больше или меньше загаданное число.
// Завершите игру, когда пользователь угадает число.

function game1() {
  const number = Math.floor(Math.random() * 100) + 1;

  let userAnswer = Number(prompt('Угадай число от 1 до 100'));

  while (userAnswer !== number) {
      if (userAnswer < number) {
          alert(`Не угадал, больше`);
      } else if (userAnswer > number) {
          alert(`Не угадал, меньше`);
      }

      userAnswer = Number(prompt('Угадай число от 1 до 100')); // Обновление значения
  }
  alert(`Угадал, молодец!`);
}

// Реализуйте связь с сайтом для второй игры.
// Создайте игру, где пользователю предлагаются простые арифметические задачи
// Требования: Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление.
// Запрашивает у пользователя ответ. Проверяет правильность ответа и выводит результат.
// Последовательность действий. Генерация задач: Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
// Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4".
//  Запрос ответа: Запрашивайте у пользователя ответ на сгенерированную задачу.
// Например, используя функцию prompt(). Проверка и вывод результата:
// Проверьте правильность ответа пользователя. Выведите результат проверки: верный ответ или ошибка.

function game2() {
    function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomNumber1 = getRandomInt (0, 50);
    const randomNumber2 = getRandomInt (0, 50);
    const signs = [`+`, `-`, `*`, `/`];
    const randomIndex = Math.floor(Math.random()* (signs.length));
    let randomSigns = signs[randomIndex];
    function solveTask() {
        let result;
        if (randomSigns === `+`) {
            result = randomNumber1 + randomNumber2;
        } else if (randomSigns === `-`) {
            result = randomNumber1 - randomNumber2;
        } else if (randomSigns === `*`) {
            result = randomNumber1 * randomNumber2;
        } else if (randomSigns === `/`) {
            result = randomNumber1 / randomNumber2;
        } 
        return result;
    }
    
    function askUserAnswer() {
        const task = `${randomNumber1} ${randomSigns} ${randomNumber2}`;
        console.log(`${task}`);
        return prompt(`Введите ответ на задачу: ${task}`);
    }
    function checkAnswer(userAnswer) {
        const correctAnswer = solveTask(randomNumber1, randomNumber2);
        if (userAnswer === correctAnswer) {
            console.log('Верный ответ!');
            } else {
            console.log(`Ошибка! Правильный ответ: ${correctAnswer}`);
        }
    }
    (async function main() {
        let correctAnswers = 0;
        while (true) {
          const userAnswer = askUserAnswer();
          checkAnswer(userAnswer);
          if (correctAnswers >= 4) {
            break;
          }
        }
      })();
}