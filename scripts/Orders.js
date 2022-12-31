import { getInterior, getPaint, getTech, getWheel, getOrders } from "./database.js"




// Remember that the function you pass to find() must return true/false


const buildOrderListItem = (order) => {

    const paints = getPaint()
    const interiors = getInterior()
    const techs = getTech()
    const wheels = getWheel()


    const foundPaint = paints.find(
        (paint) => {
            return paint.id === order.paintId
        }
    )   
     let totalCost = foundPaint.price


    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    totalCost += foundInterior.price

    const foundTech = techs.find(
        (tech) => {
            return tech.id === order.techId
        }
    )
    totalCost += foundTech.price

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    totalCost += foundWheel.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    }
    )

    return `<li>
                Order #${order.id} cost ${costString}
                </li>`
}


export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
    const orders = getOrders()



    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}