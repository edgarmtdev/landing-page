const carrousel = document.getElementById('carrousel')

export default function renderCarrousel(data) {
    data.forEach(item => {
        const card = document.createElement('div')
        const title = document.createElement('h4')
        card.classList.add('card')
        card.style.backgroundImage = `url('${item.img}')`
        title.innerText = item.name
        title.id = 'title'
        title.classList.add('text-2xl')
        card.appendChild(title)
        carrousel.appendChild(card)
        card.onmouseover = () => {
            card.classList.toggle('hover')
        }
    })
    addEvents(data)
}

function addEvents() {
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

    setInterval(() => {
        // carrousel.scroll({
        //     top: 0,
        //     left: carrousel.scrollLeft + card.clientWidth + 16,
        //     behavior: "smooth",
        // })
    }, 5000)
}