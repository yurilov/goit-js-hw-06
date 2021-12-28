{
  /* <input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> */
}

const nameInputRef = document.querySelector("#name-input");

const nameOutputRef = document.querySelector("#name-output");
nameOutputRef.textContent = "Anonymous";
nameInputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value == "") {
    nameOutputRef.textContent = "Anonymous";
  }
  nameOutputRef.textContent = event.currentTarget.value;
});
