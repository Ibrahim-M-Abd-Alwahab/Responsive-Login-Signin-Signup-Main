const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up');

signUp.addEventListener('click', () => {
    loginIn.classList.remove('block');
    loginUp.classList.remove('none');

    loginIn.classList.add('none');
    loginUp.classList.add('block');
});

signIn.addEventListener('click', () => {
    loginUp.classList.remove('block');
    loginIn.classList.remove('none');

    loginUp.classList.add('none');
    loginIn.classList.add('block');
});