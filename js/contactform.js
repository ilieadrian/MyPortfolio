const form = document.getElementById('form')
// const name = document.getElementById('name')
const formEmail = document.getElementById('react-aria-5')
const message = document.getElementById('message')


form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(formEmail.value)
})