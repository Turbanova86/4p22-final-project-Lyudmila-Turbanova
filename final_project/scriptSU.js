'use strict';

const email = document.getElementById('email');
const emailError = document.getElementById('email__error');
const password = document.getElementById('password');
const passwordError = document.getElementById('password__error');
const passwordConfirm = document.getElementById('password-confirm');
const passwordConfirmError = document.getElementById('password-confirm__error');
let flag = true;

const buttonReg = document.getElementById('btn');
buttonReg.addEventListener('click', (event) => {
    event.preventDefault();

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.value.toLowerCase());
    };

    const checkEmail = validateEmail(email);
                 
    if (checkEmail !== true) {
        email.style.borderColor = '#EE2424';
        emailError.innerText = 'Email введен некорректно';
        flag = false;
    }         
    if (email.value === '') {
        emailError.innerText = 'Поле обязательно для заполнения';
        flag = false;
    }
                   
    if (password.value.length < 8 && password.value.length > 0) {
        password.style.borderColor = '#EE2424';
        passwordError.innerText = 'Пароль должен содержать не менее 8 символов';
        flag = false;
    }
    if (password.value === '') {
        password.style.borderColor = '#EE2424';
        passwordError.innerText = 'Поле обязательно для заполнения';
        flag = false;
    }

    if (passwordConfirm.value != password.value || passwordConfirm.value === '') {
        passwordConfirm.style.borderColor = '#EE2424';
        passwordConfirmError.innerText = 'Пароли не совпадают';
        flag = false;
    }

    function makeUser() {

        let user = new Object();

        user.email = email.value;
        user.password = password.value;
        user.passwordConfirm = passwordConfirm.value;

        if (flag) {
            console.log(user)
        }
    }
    makeUser()
});