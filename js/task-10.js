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

const refs = {
  amountEl: document.querySelector('#controls input'),
  createEl: document.querySelector('button[data-create]'),
  destroyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes')
}

function createBoxes(amount) {
  for(var i = 0; i < amount; i++) {
    var elem = document.createElement('div');
    
    elem.style.width = 30 + (10 * i)+'px';
    elem.style.height = 30+'px';
    elem.style.backgroundColor = getRandomHexColor();
    
    refs.boxesEl.append(elem);
  }
}

refs.createEl.addEventListener('click', function() {
  var amount = refs.amountEl.value;
  if(amount > 0) {
    createBoxes(amount);
  }
});

refs.destroyEl.addEventListener('click', function() {
  refs.boxesEl.innerHTML = '';
});


