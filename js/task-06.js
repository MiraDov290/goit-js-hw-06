//Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.


//Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputRef = document.getElementById('validation-input');
inputRef.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
  const inputDataLength = Number(inputRef.dataset.length);
  const inputValueLength = Number(inputRef.value.trim().length);

  if (inputValueLength === inputDataLength) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  }
}