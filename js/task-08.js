
const loginForm =document.querySelector('.login-form');

const passwordInput = document.querySelector('input[name="password"]');
passwordInput.setAttribute('autocomplete', 'current-password');

const emailInput = document.querySelector('input[name="email"]');
emailInput.setAttribute('autocomplete', 'current-email');






function handleSubmit(event) {
  
  event.preventDefault();
  const {
    elements: {email, password}
  } = event.currentTarget;

  if (email.value=== "" || password.value === "") {
    alert ('Please fill in all the fields!');
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset;
}





loginForm.addEventListener("submit", handleSubmit);