const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// const num = 5;
const num = Math.floor( Math.random() * 101);
console.log('Для отладки - Загадано: ', num);
let answerText = 'Введите число от 0 до 100 \n';

function checkNumber() {
  rl.question(answerText, (answer) => {
    answerText = '';
    if (answer > num) {
      console.log('Больше');
      checkNumber();
    } else if (answer < num) {
      console.log('Меньше');
      checkNumber();
    } else {
      console.log('Ровно!!!');
      rl.close();
    }
  });
}

checkNumber();

