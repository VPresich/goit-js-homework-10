"use strict";
// З використанням властивостей і методів DOM-елементів
// напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories,
// знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categoriesRef = document.querySelector("#categories");
const categoryItemsRef = categoriesRef.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItemsRef.length}`);

categoryItemsRef.forEach((categoryItem) => {
  const categoryName = categoryItem.firstElementChild.textContent;
  const categoryElements = categoryItem.lastElementChild.children;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements.length}`);
});