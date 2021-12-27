const counterValue = document.querySelector("#value");
counterValue.innerHTML = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener("click", () => (counterValue.innerHTML -= 1));

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener("click", () => (counterValue.innerHTML -= -1));
