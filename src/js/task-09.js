const changeColorBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');
let bodyColor = document.body.style.backgroundColor;
function changeBgColor() {
  const color = getRandomHexColor();
  bodyColor = color;
  currentColor.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener('click',changeBgColor);
