const input = document.querySelector("#font-size-control");
console.dir(input);

const span = document.getElementById('text')
input.addEventListener("input", onInputRange);

function onInputRange(event) {
    const inputElem = event.target.value;
    console.log(inputElem);
    span.style.fontSize = `${inputElem}%`;
};