import { getInterior, setInteriors} from "./database.js";

const interiors = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInteriors(parseInt(event.target.value))
        }
    }
)


export const Interiors = () => {
    let html = ""

    html += '<select id="interior">'
    html += '<option value="0">Select your preferred interior:</option>'

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.fabric}</option>`
    }

    html += "</select>"
    return html
    
}