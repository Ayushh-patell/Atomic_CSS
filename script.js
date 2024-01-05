const submitButton = document.querySelector('.btn');

function submitForm() {
    submitButton.disabled = true;
        setTimeout(() => {
        submitButton.disabled = false;
    }, 2000);
}

submitButton.addEventListener("click", submitForm)