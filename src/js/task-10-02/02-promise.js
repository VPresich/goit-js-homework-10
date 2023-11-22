import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconsUrl from '../../img/icons.svg';
import iconUrl from '../../img/bi-x-octagon.svg';

const formRef = document.querySelector('.form');
console.log(formRef);

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const stateValue = formRef.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
      if (stateValue === 'fulfilled') {
        fulfill(formRef.delay.value);
      } else {
        reject(formRef.delay.value);
      }
    }, formRef.delay.value);
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
    close: true,
    // icon: '<img src="${iconUrl}" style="width: 20px; height: 20px;" />',
    // icon:
    // `<svg
    //     class="alert-close-icon"
    //     width="20"
    //     height="20">
    //     <use href="${iconsUrl}#icon-bi_x-octagon"></use>
    // </svg>`,
    icon: 'Icomoon',
    iconUrl: `${iconUrl}`,

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
    closeOnEscape: true,
    close: true,
    // icon: '<img src="${iconUrl}" style="width: 20px; height: 20px;" />',
    // icon:
    // `<svg
    //     class="alert-close-icon"
    //     width="20"
    //     height="20">
    //     <use href="${iconsUrl}#icon-bi_x-octagon"></use>
    // </svg>`,
    icon: 'Icomoon',
    iconUrl: `${iconUrl}`,

    iconColor: '#fafafb',
  });
}
