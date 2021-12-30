const form = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password }
  } = event.currentTarget;
  
  const elements = {
    email: email.value,
    password: password.value,
  }

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }
  console.log(elements);
  event.currentTarget.reset();
}

form.addEventListener('submit', handleSubmit);
