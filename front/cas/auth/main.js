import axios from 'axios';

function sendInput(type) {
  send.addEventListener('click', () => {
    axios
      .post(apiAddress, {
        typeInput: 'send',
      })
      .then(function (response) {
        console.log(response);
      });
  });
}

const apiAddress = import.meta.env.VITE_API_ADDRESS;

const send = document.querySelector('#send');
send.addEventListener('click', sendInput('send'));

const clear = document.querySelector('#clear');

const clickable = document.querySelector('.clickable');
clickable.addEventListener('click', sendInput('clickable'));
