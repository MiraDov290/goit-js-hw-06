//Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
//і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const rangeRef = document.getElementById('font-size-control');
const textRef = document.getElementById('text');

const fontSizeControl = ({ currentTarget }) =>
  (textRef.style.fontSize = `${currentTarget.value}px`);

rangeRef.addEventListener('input', fontSizeControl);
