const nameInputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");

nameInputRef.addEventListener("input", onNameInputChange);
nameInputRef.addEventListener("blur", () => {
  if (nameOutputRef.textContent === "") {
    nameOutputRef.textContent = "Anonymous";
  }
});

function onNameInputChange(event) {
  nameOutputRef.textContent = event.currentTarget.value;
}
