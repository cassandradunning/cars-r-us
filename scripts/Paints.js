import { getPaint, setPaints} from "./database.js";

const paints = getPaint()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "paints") {
            setPaints(parseInt(event.target.value))
        }
    }
)


export const Paints = () => {
    let html = ""

    html += '<select id="paint">'
    html += '<option value="0">Select your preferred paint color:</option>'

    for (const paint of paints) {
        html += `<option value="${paint.id}">${paint.color}</option>`
    }

    html += "</select>"
    return html
    
}