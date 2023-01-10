// Hamburger menu

const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

// Adding current year to copyright claim in footer
document.getElementById("year").innerHTML = new Date().getFullYear();
