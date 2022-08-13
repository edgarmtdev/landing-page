"use strict";

export default function slider(root, card, right, left) {
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

    // if (auto) {
    //     setInterval(() => {
    //         root.scroll({
    //             top: 0,
    //             left: root.scrollLeft + card.clientWidth + 16,
    //             behavior: "smooth",
    //         })
    //     }, 3000);
    // }
}
