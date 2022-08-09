'use strict'

export default function swiper(root, card, right, left) {
    right.onclick = () => {
        root.scroll({
            top: 0,
            left: root.scrollLeft + card.clientWidth + 16,
            behavior: "smooth",
        });
    };

    left.onclick = () => {
        root.scroll({
            top: 0,
            left: root.scrollLeft - card.clientWidth - 16,
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
