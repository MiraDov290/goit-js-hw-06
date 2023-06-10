// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
//підставляє його поточне значення в span#name - output.
//Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".





const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

const getInputValue = ({ currentTarget }) => {
  if (currentTarget.value.trim() !== '') {
    nameRef.textContent = currentTarget.value.trim();
  } else {
    nameRef.textContent = 'Anonymous';
  }
};

inputRef.addEventListener('input', getInputValue);
