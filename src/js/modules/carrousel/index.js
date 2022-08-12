import createElement from "../../libs/ui/createElements";
import slider from "../../libs/slider/slider";

const carrousel = document.getElementById("carrousel");
const right = document.getElementById("right");
const left = document.getElementById("left");

export default function renderCarrousel(data) {
    data.forEach((item) => {
        const card = createElement(
            "div",
            {
                class: "card",
            },
        );
        carrousel.appendChild(card);
        const title = createElement(
            "h4",
            {
                id: "title",
                class: "text-2xl",
            },
            item.name
        );
        card.style.backgroundImage = `url('${item.img}')`;
        card.appendChild(title);
        card.onmouseover = () => {
            card.classList.toggle("hover");
        };
    });
    const card = document.querySelector(".card");
    slider(carrousel, card, right, left);
}
