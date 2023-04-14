const emailInput = document.querySelector('#email-input');
const submitButton = document.querySelector('#submit-btn');
const errorMessageContainer = document.querySelector('.error-message-container');

submitButton.addEventListener('click', (e) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    // Show error
    e.preventDefault();
    errorMessageContainer.style.display = 'flex';
  }
});