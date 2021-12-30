const changeColorBtn = document.querySelector('.change-color');
const currentColor = document.querySelector('.color');

function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  currentColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorBtn.addEventListener('click',changeBgColor);
