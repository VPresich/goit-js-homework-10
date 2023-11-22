"use strict";

/*
Напиши скрипт створення і очищення колекції елементів. 
Користувач вводить кількість елементів в input і натискає кнопку Створити,
після чого рендериться колекція.
Натисненням на кнопку Очистити, колекція елементів очищається.
 <div id="controls">
    <input type="number" min="1" max="100" step="1" id="input-number" />
    <button type="button" data-create>Create</button>
    <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
Створи функцію createBoxes(amount), яка приймає один параметр - число. 
Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

Розміри найпершого <div> - 30px на 30px.
Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
Всі елементи повинні мати випадковий колір фону у форматі HEX. 
Використовуй готову функцію getRandomHexColor для отримання кольору.
*/

import getRandomHexColor from "./random-hex-color.js";

const refs = {
  inputNumber: document.querySelector("#input-number"),
  createButton: document.querySelector("[data-create]"),
  destroyButton: document.querySelector("[data-destroy]"),
  boxesContainer: document.querySelector("#boxes"),
};

refs.createButton.addEventListener("click", onCreateButtonClick);
refs.destroyButton.addEventListener("click", onDestroyButtonClick);

function createBoxes(amount) {
  const baseSize = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = baseSize + i * 10;
    const divRef = document.createElement("div");
    divRef.style.width = `${size}px`;
    divRef.style.height = `${size}px`;
    divRef.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divRef);
  }

  refs.boxesContainer.appendChild(fragment);
}

function onCreateButtonClick() {
  const amount = Number(refs.inputNumber.value);
  if (amount >= 1 && amount <= 100) {
    refs.boxesContainer.innerHTML = "";
    createBoxes(amount);
    refs.inputNumber.value = "";
  }
}

function onDestroyButtonClick() {
  refs.boxesContainer.innerHTML = "";
}
