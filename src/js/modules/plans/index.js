import createElement from "../../libs/ui/createElements";
import slider from "../../libs/slider/slider";
import Title from "./components/title";
import Content from "./components/content";

const mainPlans = document.querySelector(".main-plans_section");
const left = document.getElementById("plans-left");
const right = document.getElementById("plans-right");

export default function renderPlans(data) {
    data.map((item) => {
        const card = createElement(
            "article",
            {
                class: "card-plan",
            },
            ""
        );
        const title = Title(item)
        const content = Content(item)

        card.appendChild(title);
        card.appendChild(content);
        mainPlans.appendChild(card);
    });
    const cardPlan = document.querySelector(".card-plan");
    slider(mainPlans, cardPlan, right, left);
}
