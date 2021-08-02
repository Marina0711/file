'use strict'

const personalData = document.querySelectorAll('[type="text"]');
const button = document.querySelector('button');
const article = document.querySelector('main');

button.addEventListener('click', () => {
  let count = 0;
  let message = document.createElement('p');

  personalData.forEach(data => {

    if (data.value !== '' && data.value !== 'input') {
      count++;
    } else {
      data.style.border = '1px solid red'
    }
  })

  if (count === personalData.length) {
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

  // const promis = new Promise(function (resolve, reject) {
  //   if (count === personalData.length) {
  //     resolve(message);
  //   } else {
  //     reject(message);
  //   }
  // })
  //
  // promis.then(
  //   result => {
  //     message.style.color = 'green';
  //     message.textContent = 'Запись прошла успешно';
  //
  //     personalData.forEach(data => {
  //       data.value = '';
  //       data.style.border = '1px solid white';
  //     });
  //     },
  //   error => {
  //         message.style.color = 'red';
  //         message.textContent = 'Заполните данные'
  //
  //   }).finally(() => {
  //
  //   message.classList.add('message');
  //   article.insertAdjacentElement('beforeend', message);
  //
  //   setTimeout(function () {
  //     article.removeChild(message);
  //   }, 1500)
  // })

  message.classList.add('message');
  article.insertAdjacentElement('beforeend', message);

  setTimeout(function () {
    article.removeChild(message);
  }, 1500)
})







