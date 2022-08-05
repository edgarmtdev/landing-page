const navbar = document.getElementById('navbar')
const carrousel = document.querySelector('.card')

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navbar.classList.remove('navbar-nav_shadow')
        } else {
            navbar.classList.add('navbar-nav_shadow')
        }
    })
}

const observer = new IntersectionObserver(callback, {
    threshold: .15
})

observer.observe(carrousel)