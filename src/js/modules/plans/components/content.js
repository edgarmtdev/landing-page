import createElement from "../../../libs/ui/createElements";

export default function Content(data) {
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
        data.description
    );

    content.appendChild(p)
    return content
} 