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

// Реализуйте связь с сайтом для второй игры. Создайте игру, где пользователю предлагаются простые арифметические задачи. Требования: Сайт генерирует случайные задачи на сложение, вычитание, умножение и деление. Запрашивает у пользователя ответ. Проверяет правильность ответа и выводит результат. Последовательность действий. Генерация задач: Случайным образом создавайте арифметические задачи на сложение, вычитание, умножение и деление.
// Например, задачи могут выглядеть так: "5 + 3", "10 - 2", "4 * 7", "20 / 4". Запрос ответа: Запрашивайте у пользователя ответ на сгенерированную задачу. Например, используя функцию prompt(). Проверка и вывод результата:
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

// Игра «Переверни текст». Создайте игру, где пользователю нужно ввести текст, который будет перевернут. Требования:
// Сайт запрашивает у пользователя текст.
// Сайт переворачивает введенный текст.
// Сайт выводит перевернутый текст.

function game3() {
    let text = String(prompt('Введите текст')).split('');
    let reverseText = text.reverse();
    let joinText = reverseText.join('');
    alert(joinText);
}

//Игра «Викторина». Создайте простую викторину с несколькими вопросами и вариантами ответов. Требования: Сайт предлагает несколько вопросов и вариантов ответов. Запрашивает у пользователя ответы на каждый вопрос.Подсчитывает и выводит количество правильных ответов. Последовательность создания игры Викторина:
//Используйте предоставленный массив вопросов: Массив quiz содержит три вопроса с вариантами ответов и правильными ответами.
//Массив вопросов и правильных ответов.
//Запросите у пользователя ответы. Используйте функцию prompt() для получения ответа пользователя на каждый вопрос. Проверьте ответы и подсчитайте правильные: Сравните ответ пользователя с правильным ответом и увеличьте счетчик правильных ответов, если ответ верный.Выведите результат: В конце игры выведите количество правильных ответов с помощью alert().
       
function game5() {
    const quiz = [
        {
            question: "Столица России?",
            options: ["1. Москва", "2. Санкт-Петербург", "3. Екатеринбург"],
            correctAnswer: 1
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let correctAnswers = 0;
    for (let i = 0; i < quiz.length; i++) {
        const question = quiz[i];
        const userAnswer = +prompt(question.question + "\n" + question.options.join("\n"));
        if (userAnswer === question.correctAnswer) {
            correctAnswers++;
        }
    }
    alert(`Вы ответили правильно на ${correctAnswers} из ${quiz.length} вопросов.`);
}
      