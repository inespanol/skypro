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
