// todo: imort encoding function from the separate JS module
let input = document.querySelector('.clear-input');
let output = document.querySelector('.encoded-output');

input.addEventListener('input', onInput);
function onInput(event) {
  // todo: use imported function to encode the input
  output.value = event.target.value.replace(/./g, '?');
}