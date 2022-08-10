import createElement from "../../libs/ui/createElements";
import slider from "../../libs/slider/slider";

const mainPlans = document.querySelector(".main-plans_section");
const left = document.getElementById("plans-left");
const right = document.getElementById("plans-right");

export default function renderPlans(data) {
    console.log(data);
    data.forEach((item) => {
        const card = createElement(
            "article",
            {
                class: "card-plan",
            },
            ""
        );
        const title = createElement(
            "h6",
            {
                class: "text-base",
            },
            item.title
        );
        const content = createElement(
            "div",
            {
                class: "card-plan_content",
            },
            ""
        );
        const p = createElement(
            "p",
            {
                class: "text-sm",
            },
            item.description
        );

        card.appendChild(title);
        card.appendChild(content);
        content.appendChild(p);
        mainPlans.appendChild(card);
    });
    const cardPlan = document.querySelector(".card-plan");
    slider(mainPlans, cardPlan, right, left);
}
