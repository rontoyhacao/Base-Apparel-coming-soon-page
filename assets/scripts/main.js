const form = document.querySelector('#form');
const email = document.querySelector('#email');
const error = document.querySelector('.error-text');
const success = document.querySelector('.success-text');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;

    if(!validateEmail(emailVal)) {
        form.classList.add('error');
        error.style.display = 'block';
        success.style.display = 'none';
    }else {
        form.classList.remove('error');
        error.style.display = 'none';
        success.style.display = 'block';
        setTimeout(function() {
            // Do something after 2 seconds
            location.reload();//reload page
        }, 2000);
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}