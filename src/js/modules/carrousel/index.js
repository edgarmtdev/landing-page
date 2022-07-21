const carrousel = document.getElementById('carrousel')
const card = document.querySelector('.card')
console.log(carrousel.clientWidth);
console.log(card.clientWidth);
const rigth = document.getElementById('rigth')

rigth.onclick = () => {
    carrousel.scroll({
        top: 0,
        left: carrousel.scrollLeft + card.clientWidth+16,
        behavior: "smooth",
    })
    console.log(carrousel.scrollLeft);
}

