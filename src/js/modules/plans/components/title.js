import createElement from "../../../libs/ui/createElements";

export default function Title(data) {
    const title = createElement(
        "h6",
        {
            class: "text-base",
        },
        data.title
    );

    title.style.backgroundImage = `linear-gradient(to right, #434343c4 0%, rgba(0, 0, 0, 0.726) 100%), url('${data.img}')`
    return title
}