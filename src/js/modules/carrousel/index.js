import createElement from "../../libs/ui/createElements.js";

const carrousel = document.getElementById("carrousel");

export default function renderCarrousel(data) {
    data.forEach((item) => {
        const card = createElement("div", {
            class: "card",
        });
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
    addEvents(data);
}

function addEvents() {
    const card = document.querySelector(".card");
    const rigth = document.getElementById("rigth");
    const left = document.getElementById("left");

    rigth.onclick = () => {
        carrousel.scroll({
            top: 0,
            left: carrousel.scrollLeft + card.clientWidth + 16,
            behavior: "smooth",
        });
    };

    left.onclick = () => {
        carrousel.scroll({
            top: 0,
            left: carrousel.scrollLeft - card.clientWidth - 16,
            behavior: "smooth",
        });
    };

    setInterval(() => {
        // carrousel.scroll({
        //     top: 0,
        //     left: carrousel.scrollLeft + card.clientWidth + 16,
        //     behavior: "smooth",
        // })
    }, 5000);
}
