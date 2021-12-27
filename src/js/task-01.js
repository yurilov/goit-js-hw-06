const categoriesEl = document.querySelectorAll("ul#categories li.item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;

  console.log(`Category: ${categoryTitle}`);

  const categoryELements = category.querySelectorAll("li");

  console.log(`Elements: ${categoryELements.length}`);
});
