const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username ne sme biti prazan');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email ne sme biti prazan');
    } else if(!isEmail(emailValue)) {
        setErrorFor(email, 'Email nije validan');
    } else {
        setSuccessFor(email);
    }

    if(phoneValue === '') {
        setErrorFor(phone, 'Broj telefona ne sme biti prazan');
    } else if(!isPhone(phoneValue)) {
        setErrorFor(phone, 'Broj telefona nije pravilno unesen. (9 ili 10 cifara)');
    } else {
        setSuccessFor(phone);
    }

    if(messageValue === '') {
        setErrorForMsg(message, 'Poruka ne sme biti prazna');
    } else {
        setSuccessForMsg(message);
    }
}

function setErrorFor(input, message) {
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small');

    small.innerText = message;

    inputContainer.className = 'input-container error';
}

function setSuccessFor(input) {
    const inputContainer = input.parentElement;

    inputContainer.className = 'input-container success';
}

function setErrorForMsg(input, message) {
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small');

    small.innerText = message;

    inputContainer.className = 'input-container textarea error';
}

function setSuccessForMsg(input) {
    const inputContainer = input.parentElement;

    inputContainer.className = 'input-container textarea success';
}

function isEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(phone) {
    return (phone.match(/\d/g).length === 10) || (phone.match(/\d/g).length === 9);
}