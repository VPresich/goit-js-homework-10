"use strict";/*
Напиши скрипт управління формою логіна.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Log in</button>
</form>

1. Обробка відправлення форми form.login-form повинна відбуватися відповідно
 до події submit.

2. Під час відправлення форми сторінка не повинна перезавантажуватися.

3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те,
що всі поля повинні бути заповнені.  Не додавай на інпути атрибут required,
валідація має відбуватися саме через JS.

4. Якщо користувач заповнив усі поля і відправив форму,
збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
а значення поля - значенням властивості. 

Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення 
полів форми методом reset.
*/

const loginForm = document
  .querySelector(".login-form")
  .addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const formRef = event.target;
  const email = formRef.elements.email.value;
  const password = formRef.elements.password.value;

  if (email === "" || password === "") {
    alert("All fields must be filled!");
  } else {
    console.log({ email, password });
    formRef.reset();
  }
}
