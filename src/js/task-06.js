const valInput = document.querySelector('#validation-input');

const funcBlur = () => {
    valInput.classList.forEach(elem => valInput.classList.remove(elem));
    
  if (valInput.value.length === parseInt(valInput.dataset.length, 10)) {
    valInput.classList.add('valid');
  } else {
    valInput.classList.add('invalid');
  }
};

valInput.addEventListener('blur', funcBlur);