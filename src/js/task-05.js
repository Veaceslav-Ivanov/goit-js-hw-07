const inputEl = document.querySelector("[type='text']");
console.log(inputEl);


const spanEl = document.querySelector("#name-output")
console.log(spanEl);

inputEl.addEventListener("input", onInputChange);

function onInputChange(event) {
    
spanEl.textContent = event.currentTarget.value.trim() || "незнакомец";
    
};