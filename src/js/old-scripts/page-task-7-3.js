"use strict";
// Напиши скрипт, який під час набору тексту в інпуті input #name-input (подія input),
// підставляє його поточне значення в span #name-output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

/*
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>
*/

const nameInputRef = document.getElementById("name-input");
nameInputRef.addEventListener("input", onNameInput);

function onNameInput(event) {
  const inputValue = event.currentTarget.value.trim();
  const output = document.getElementById("name-output");
  output.textContent = inputValue !== "" ? inputValue : "Anonymous";
}
