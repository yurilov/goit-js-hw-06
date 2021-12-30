const input = document.querySelector("#validation-input");
const inputLength = Number(input.dataset.length);

input.addEventListener("blur", isInputValid);

function isInputValid() {
  if (input.value.length === inputLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return;
  }

  input.classList.add("invalid");
  input.classList.remove("valid");
  return;
}
