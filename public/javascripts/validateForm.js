const form = document.querySelector('#form')
const submitButton = document.querySelector('#submitButton')
form.addEventListener('submit', function onFormSubmitted (event) {
  if (!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
  }
})
submitButton.addEventListener('click', function onSubmitButtonClicked (event) {
  form.classList.add('was-validated')
})
