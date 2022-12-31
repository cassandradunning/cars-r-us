import { getTech, setTechnologies} from "./database.js";

const techs = getTech()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "tech") {
            setTechnologies(parseInt(event.target.value))
        }
    }
)


export const Technologies = () => {
    let html = ""

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.package}</option>`
    }

    html += "</select>"
    return html
    
}