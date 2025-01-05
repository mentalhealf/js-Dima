// // Will run first
// console.log("First log");


// setTimeout(() => {
//  // Will run last, after 2000 milliseconds
//  console.log("Second log");
// }, 20000);


// // Will run second
// console.log("Third log");

// const button = document.querySelector("button");


// const onClick = () => {
//   setTimeout(() => {
//     alert("I love async JS!");
//   }, 350);
// };


// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener("click", onClick);

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;


// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });




// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// Отримуємо елемент лічильника
// const counterElement = document.getElementById('counter');

// // Початкове значення лічильника
// let count = 0;

// // Функція для оновлення лічильника
// function updateCounter() {
//   count++; // Збільшуємо значення
//   counterElement.textContent = count; // Оновлюємо текст на сторінці
// }

// // Виконуємо updateCounter кожну секунду
// setInterval(updateCounter, 1000);

// const colorBlock = document.getElementById("colorBlock");

// // Масив кольорів
// const colors = ["#FF5733", "#33FF57", "#5733FF", "#FFC300", "#C70039", "#900C3F", "#DAF7A6"];

// // Індекс для відстеження поточного кольору
// let currentColorIndex = 0;

// // Функція для зміни кольору
// function changeColor() {
//   // Застосовуємо колір з масиву
//   colorBlock.style.backgroundColor = colors[currentColorIndex];

//   // Збільшуємо індекс
//   currentColorIndex++;

//   // Якщо індекс досягає кінця масиву, скидаємо його до 0
//   if (currentColorIndex >= colors.length) {
//     currentColorIndex = 0;
//   }
// }

// // Викликаємо зміну кольору кожні 3 секунди
// setInterval(changeColor, 3000);

// const textBlock = document.getElementById("textBlock");

// // Масив текстів
// const texts = [
//   "123",
//   "zero is not nothing since how can 'nothing' is a number then it will already be something",
//   "Текст змінюється 'Automatic'",
//   "Santa is real",
//   "'Launching GitHub Desktop'"
// ];

// // Індекс для відстеження поточного тексту
// let currentTextIndex = 0;

// // Функція для зміни тексту
// function changeText() {
//   // Застосовуємо текст з масиву
//   textBlock.textContent = texts[currentTextIndex];

//   // Збільшуємо індекс
//   currentTextIndex++;

//   // Якщо індекс досягає кінця масиву, скидаємо його до 0
//   if (currentTextIndex >= texts.length) {
//     currentTextIndex = 0;
//   }
// }

// // Викликаємо зміну тексту кожні 2 секунди
// setInterval(changeText, 2000);



const timerDisplay = document.getElementById('timer');
    const startButton = document.getElementById('start-button');

    let countdown;

    function startTimer(duration) {
      clearInterval(countdown);
      const endTime = Date.now() + duration * 1000;

      countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if (secondsLeft <= 0) {
          clearInterval(countdown);
          timerDisplay.textContent = "00:00";
          alert("Time's up!");
          return;
        }

        const minutes = Math.floor(secondsLeft / 60);
        const seconds = secondsLeft % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }, 1000);
    }

    startButton.addEventListener('click', () => {
      startTimer(60); // 1 minute
    });