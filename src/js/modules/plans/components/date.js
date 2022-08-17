import createElement from "../../../libs/ui/createElements";
import { DateTime } from "luxon";

export default function Date(data) {
    const newDate = DateTime.fromJSDate(data).toFormat("MMMM d yyyy");
    const date = createElement(
        "div",
        {
            class: "plan-date text-xs",
        },
        newDate
    );

    return date;
}