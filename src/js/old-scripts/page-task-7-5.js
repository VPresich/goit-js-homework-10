"use strict";

/*
Напиши скрипт, який змінює кольори фону елемента <body> 
через інлайн-стиль по кліку на button.change-color і 
виводить значення кольору в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

import getRandomHexColor from "./random-hex-color.js";

const widget = document.querySelector(".widget");
const changeColorBtn = widget.querySelector(".change-color");
const colorSpan = widget.querySelector(".color");

changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}
