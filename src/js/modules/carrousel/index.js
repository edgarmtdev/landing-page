const carrousel = document.getElementById('carrousel')
const card = document.querySelector('.card')

const rigth = document.getElementById('rigth')
const left = document.getElementById('left')

rigth.onclick = () => {
    carrousel.scroll({
        top: 0,
        left: carrousel.scrollLeft + card.clientWidth + 16,
        behavior: "smooth",
    })
    console.log(carrousel.scrollLeft);
}

left.onclick = () => {
    carrousel.scroll({
        top: 0,
        left: carrousel.scrollLeft - card.clientWidth - 16,
        behavior: "smooth"
    })
}
