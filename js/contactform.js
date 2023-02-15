const form = document.getElementById('form')
const contactName = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')


function checkRequired (inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === '') {
        error(input)
        } else {
        succes(input);
        }   
    });
}

function error(input) {
    const formControl = input.parentElement;
    const inputEl = formControl.querySelector('.form-control');
    const spanEl = formControl.querySelector('.target');
    inputEl.classList.replace("border-textSecondary/50", "border-red-500","focus:border-secondary","focus:border-red-700")
    spanEl.classList.remove("hidden")
}

function succes(input) {
    const formControl = input.parentElement;
    const inputEl = formControl.querySelector('.form-control');
    const spanEl = formControl.querySelector('.target');
    inputEl.classList.replace("border-red-500", "border-textSecondary/50", "focus:border-red-700", "focus:border-secondary")
    spanEl.classList.add("hidden")
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        succes(input);
    } else {
        error(input);
    }
}

form.addEventListener("submit", e => {
    e.preventDefault()
    checkRequired([contactName, email, message])
    checkEmail(email)
})