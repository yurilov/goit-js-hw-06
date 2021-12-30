const fontSizeCtrl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function changeFontSize(event) {
  text.style.fontSize = `${event.currentTarget.value}px`;
}

fontSizeCtrl.addEventListener('input', changeFontSize);
