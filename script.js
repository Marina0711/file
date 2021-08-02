'use strict'

const personalData = document.querySelectorAll('[type="text"]');
const button = document.querySelector('button');
const article = document.querySelector('main');

button.addEventListener('click', () => {
  let isValid = true;
  let message = document.createElement('p');

  personalData.forEach(data => {
    if (data.value === '') {
      isValid = false
      data.style.border = '1px solid red'
    }
  })

  if (isValid) {
    message.style.color = 'green';
    message.textContent = 'Запись прошла успешно';

    personalData.forEach(data => {
      data.value = '';
      data.style.border = '1px solid white'
      })
  } else {
    message.style.color = 'red';
    message.textContent = 'Заполните данные'
  }

  message.classList.add('message');
  article.insertAdjacentElement('beforeend', message);

  setTimeout(function () {
    article.removeChild(message);
  }, 1500)
})







