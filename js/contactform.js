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
    const target = document.getElementsByClassName('target');
    target.className = 'target mt-1 font-medium text-red-400';
}

function succes(input) {
    const target = document.getElementsByClassName('target');
    target.className = 'target hidden mt-1 font-medium text-red-400';
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