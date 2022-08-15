import createElement from "../../libs/ui/createElements";
import slider from "../../libs/slider/slider";
import Title from "./components/title";
import Description from "./components/description";
import Date from "./components/date";

const mainPlans = document.querySelector(".main-plans_section");
const left = document.getElementById("plans-left");
const right = document.getElementById("plans-right");

export default function renderPlans(data) {
    data.map((item) => {
        const card = createElement(
            "article",
            {
                class: "card-plan",
            }
        );
        const title = Title(item)
        const description = Description(item)
        const date = Date(item.date)

        
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(date)
        mainPlans.appendChild(card);
    });
    const cardPlan = document.querySelector(".card-plan");
    slider(mainPlans, cardPlan, right, left);
}
