import createElement from "../../../libs/ui/createElements";

export default function Title(data) {
    return createElement(
        "h6",
        {
            class: "text-base",
        },
        data.title
    );
}