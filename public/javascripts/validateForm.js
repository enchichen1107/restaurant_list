// init data
const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit-button')

// stop default browser behavior
if (form) {
  form.addEventListener('submit', function onFormSubmitted (event) {
    if (!form.checkValidity()) {
      event.stopPropagation()
      event.preventDefault()
    }
  })

  // add bootstrap validation
  submitButton.addEventListener('click', function onSubmitButtonClicked (event) {
    form.classList.add('was-validated')
  })
}
