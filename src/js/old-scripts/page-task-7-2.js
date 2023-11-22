"use strict";

// Напиши скрипт для створення галереї зображень на підставі масиву даних.
//  HTML містить список ul.gallery.
// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>,
// вкладених в <li>. Для створення розмітки використовуй шаблонні рядки
// і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

// Import array of images
import images from "../data/images.js";

const galleryRef = document.querySelector(".gallery2");

// Function for create of markup (string) for 1 item (li) with img
const imageMarkup = (image) => {
  return `<li class="gallery2-item"><img class="gallery2-img" src="${image.url}" alt="${image.alt}" width="360" ></li>`;
};

// Create of markup (string) for all items
const imagesMarkup = images.map(imageMarkup).join("");

// Insert in DOM
galleryRef.insertAdjacentHTML("beforeend", imagesMarkup);
