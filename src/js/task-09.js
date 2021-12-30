const changeColorBtn = document.querySelector(".change-color");
const currentColor = document.querySelector(".color");
const body = document.body;
function changeBgColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  currentColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener("click", changeBgColor);
