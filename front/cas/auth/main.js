import axios from 'axios';

import { v4 as uuidv4 } from 'uuid';

const apiAddress = import.meta.env.VITE_API_ADDRESS;
const sessionID = uuidv4();
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let attack = 'L3';

if (
  urlParams.get('service') ==
  'https://portailweb.universita.corsica/plugins/auth/auth_cas/auth_cas.php'
) {
  attack = 'Stella Mare';
}
function sendInput(type) {
  axios
    .post(apiAddress, {
      typeInput: type,
      sessionID,
      timestamp: Date.now(),
      attack,
    })
    .then(function (response) {
      console.log(response);
    });
}

sendInput('load page');

const identifiant = document.querySelector('#username');
identifiant.addEventListener('click', () => {
  sendInput('click on identifiant');
});

const mdp = document.querySelector('#password');
mdp.addEventListener('click', () => {
  sendInput('click on password');
});

const seConnecter = document.querySelector('#submitBtn');
seConnecter.addEventListener('click', () => {
  sendInput('click on se connecter');
});
