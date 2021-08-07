const elCategories = document.querySelector("#categories");
// console.log(elCategories);

const elItems = elCategories.querySelectorAll(".item");
// console.log(elItems);
console.log(`В списке ${elItems.length} категории(й).`);
console.log("");

elItems.forEach(el => {
    console.log("Категория:", el.getElementsByTagName("h2")[0].textContent);
    console.log("Количество элементов:", el.getElementsByTagName("li").length);
    console.log("");
 });