import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import icon1Url from '../../img/bi-x-octagon.svg';
import icon2Url from '../../img/bi_check.svg';

const formRef = document.querySelector('.form');
console.log(formRef);

formRef.addEventListener('submit', onSubmit);

function onSubmit() {
  event.preventDefault();

  const stateValue = formRef.querySelector('input[name="state"]:checked').value;
  const delay = formRef.delay.value;

  const promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        fulfill(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise.then(fulfill).catch(reject);
}

function fulfill(delay) {
  iziToast.show({
    message: `Fulfilled promise in ${delay}ms`,
    messageColor: '#fafafb',
    messageSize: '16px',
    messageLineHeight: '1.5',
    backgroundColor: '#82C43C',
    position: 'topRight',
    closeOnEscape: true,
    close: false,
    icon: 'Icomoon',
    iconUrl: `${icon2Url}`,
    iconColor: '#fafafb',
  });
}

function reject(delay) {
  iziToast.show({
    message: `Rejected promise in ${delay}ms`,
    messageColor: '#fafafb',
    messageSize: '16px',
    messageLineHeight: '1.5',
    backgroundColor: '#fc5a5a',
    position: 'topRight',
    closeOnEscape: false,
    icon: 'Icomoon',
    iconUrl: `${icon1Url}`,
    iconColor: '#fafafb',
  });
}
