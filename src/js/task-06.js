const input = document.querySelector("#validation-input");

input.addEventListener("blur", isInputValid);

function isInputValid() {
  if (input.value.length === 6) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    return;
  }

  input.classList.add("invalid");
  input.classList.remove("valid");
  return;
}
