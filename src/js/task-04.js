const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

function onDecrementClick() {
    counterValue.textContent -= 1;
}

function onIncrementClick() {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);