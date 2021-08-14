const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

  const ingredientElements = ingredients.map(ingredient => {
    const ingredientEl = document.createElement("li");
    ingredientEl.textContent = ingredient;
    return ingredientEl;
  });

const ingredientsList = document.querySelector("#ingredients");
    ingredientsList.append(...ingredientElements);


