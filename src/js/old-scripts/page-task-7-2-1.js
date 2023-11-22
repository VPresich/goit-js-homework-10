'use strict';
// Напиши скрипт для створення галереї зображень на підставі масиву даних.
// HTML містить список ul.gallery.
// <ul id="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>,
// вкладених в <li>. Для створення розмітки використовуй document.createElement()

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

// Імпорт вхідних даних з іншого файлу

import images from '../data/photos.js';

const galleryRef = document.querySelector('.gallery');

// Function for create of 1 item (li) with img
const createItem = ({ url, alt, width = 360, height = 300 }) => {
  const liRef = document.createElement('li');
  liRef.classList.add('photo-item');

  const imgRef = document.createElement('img');
  imgRef.classList.add('photo');
  imgRef.src = url;
  imgRef.alt = alt;
  imgRef.width = width;
  imgRef.height = height;

  liRef.append(imgRef);
  return liRef;
};

// Create array of items
const itemsRef = images.map(createItem);

//Insert items to DOM
galleryRef.append(...itemsRef);
