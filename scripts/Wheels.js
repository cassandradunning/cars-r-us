import { getWheel, setWheels} from "./database.js";

const wheels = getWheel()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)


export const Wheels = () => {
    let html = ""

    html += '<select id="wheels">'
    html += '<option value="0">Select a wheel type:</option>'

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.type}</option>`
    }

    html += "</select>"
    return html
    
}