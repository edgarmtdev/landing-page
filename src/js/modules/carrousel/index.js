const carrousel = document.getElementById('carrousel')
const title = document.getElementById('title')

export default function renderCarrousel(data) {
    data.forEach(item => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.style.backgroundImage = `url('${item.img}')`
        carrousel.appendChild(card)
    })
    addEvents(data)
}

function addEvents(data) {
    const card = document.querySelector('.card')
    const rigth = document.getElementById('rigth')
    const left = document.getElementById('left')

    rigth.onclick = () => {
        carrousel.scroll({
            top: 0,
            left: carrousel.scrollLeft + card.clientWidth + 16,
            behavior: "smooth",
        })
    }

    left.onclick = () => {
        carrousel.scroll({
            top: 0,
            left: carrousel.scrollLeft - card.clientWidth - 16,
            behavior: "smooth"
        })
    }
}
