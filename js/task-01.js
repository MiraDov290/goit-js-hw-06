//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// const totalItemEl = document.querySelectorAll('.item');
// console.log("Number of categories:", totalItemEl.length);

// totalItemEl.forEach(function (item) {
//     console.log(`Category: ${item.children[0].textContent}
//         Elements: ${item.children[1].children.length}`);
// });

const categoriesEl = document.getElementById('categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);

const arrayTitlesCategoriesRef = document.querySelectorAll('h2');
arrayTitlesCategoriesRef.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});


//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5
