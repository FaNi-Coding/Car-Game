let mainPage = document.querySelector('main');
let startPageBlock = document.querySelector('#start-page');
let startButton = document.querySelector('#startButton');

console.log(startButton)
startButton.addEventListener('click', function () {
     startGame();
});

const startGame = function () {

     startPageBlock.style.display = 'none';
     let gamePageBlock = document.createElement('section');
     let car = document.createElement('span');
     car.id = 'car-1';
     gamePageBlock.id = 'gamePage';
     gamePageBlock.classList.add('game-page');
     car.classList.add('car');
     mainPage.appendChild(gamePageBlock);
     gamePageBlock.appendChild(car);
     gamePageBlock.addEventListener('keypress', carController);
}



const carController = function (e) {
     console.log(e.keyCode);
     if (e.keyCode === 37) {
          car.style.left = car.offsetLeft - 10 + 'px';
     } else if (e.keyCode === 39) {
          car.style.left = car.offsetLeft + 10 + 'px';
     } else if (e.keyCode === 38) {
          car.style.top = car.offsetTop - 10 + 'px';
     } else if (e.keyCode === 40) {
          car.style.top = car.offsetTop + 10 + 'px';
     }
}