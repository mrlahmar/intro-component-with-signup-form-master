const form = document.querySelector('.form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    verifyInputs();
});

const verifyInputs = () => {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    if (firstNameValue === '') {
        setErrorFor(firstName, 'First Name cannot be empty')
    } else {
    setSuccessFor(firstName)
    }

    if (lastNameValue === '') {
    setErrorFor(lastName, 'Last Name cannot be empty')
    } else {
    setSuccessFor(lastName)
    }

    if (!emailIsValid(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email')
    } else {
    setSuccessFor(email)
    }

    if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be empty')
    } else {
    setSuccessFor(password)
    }
}


const emailIsValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}