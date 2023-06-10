//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, 
//після чого рендериться колекція.Натисненням на кнопку Очистити, колекція елементів очищається.

//<div id="controls">
  //<input type="number" min="1" max="100" step="1" />
  //<button type="button" data-create>Create</button>
  //<button type="button" data-destroy>Destroy</button>
//</div>

//<div id="boxes"></div>

//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.


//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('controls');
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');
const divBoxesEl = document.getElementById('boxes');
divBoxesEl.style.display = 'flex';
divBoxesEl.style.flexWrap = 'wrap';
divBoxesEl.style.alignItems = 'center';
divBoxesEl.style.marginTop = '30px';
 

createBtnEl.addEventListener('click', () => {
  //console.log(inputNumberEl.value);
  if (
    Number(inputNumberEl.value.trim()) > Number(inputNumberEl.max) ||
    Number(inputNumberEl.value.trim()) < Number(inputNumberEl.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(inputNumberEl.value.trim());
  }
  inputNumberEl.value = '';
});

destroyBtnEl.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  inputNumberEl.value = '';
  divBoxesEl.innerHTML = '';
}
  