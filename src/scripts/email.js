'use strict';

const form = document.querySelector('.form');
const input = document.querySelector('.form__field--email');
const inputName = document.querySelector('.form__field--name');
const inputPhone = document.querySelector('.form__field--phone-num');
const button = document.querySelector('.form__button');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

input.addEventListener('change', function() {
  const inputValue = input.value;

  if (!isValidEmail(inputValue)) {
    input.style.borderBottom = '1px solid #eb5757';
  } else {
    input.style.borderBottom = '1px solid #0c797a';
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

button.onclick = () => {
  if (isValidEmail(input.value)) {
    input.style.borderBottom = '1px solid #828282';
  }
  if (inputName.value.length === 0) {
    inputName.style.borderBottom = '1px solid #eb5757';
  }
  if (inputPhone.value === '') {
    inputPhone.style.borderBottom = '1px solid #eb5757';
  }
  if (input.value.length === 0 ) {
    input.style.borderBottom = '1px solid #eb5757';
  }
};
