const database = {
    orderBuilder: {},

    paints: [
    {id : 1, color:"Silver", price: 1200},
    {id : 2, color:"Midnight Blue", price: 1500},
    {id : 3, color:"Firebrick Red", price: 2000},
    {id : 4, color:"Spring Green", price: 1750}
    ],

    interiors: [
        {id : 1, fabric:"Beige Fabric", price: 2000},
        {id : 2, fabric:"Charcoal Fabric", price: 1900},
        {id : 3, fabric:"White Leather", price: 2500},
        {id : 4, fabric:"Black Leather", price: 2250}
        ],

        techs: [
            {id : 1, package:"Basic Package (basic sound system)", price: 2000},
            {id : 2, package:"Navigation Package (includes integrated navigation controls)", price: 2500},
            {id : 3, package:"Visibility Package (includes side and reat cameras)", price: 3000},
            {id : 4, package:"Ultra Package (includes navigation and visibility packages)", price: 5000}
            ],

            wheels: [
                {id : 1, type:"17-inch Pair Radial", price: 800},
                {id : 2, type:"17-inch Pair Radial Black", price: 1000},
                {id : 3, type:"18-inch Pair Spoke Silver", price: 1200},
                {id : 4, type:"18-inch Pair Spoke Black", price: 1400}
                ],
                customOrders: [
                    {
                        id: 1,
                        paintId: 3,
                        interiorId: 2,
                        techId: 3,
                        wheelId: 1,
                        timestamp: 1614659931693
                    }
                ]
}

export const getPaint = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interiors.map(interior => ({...interior}))
}
export const getTech = () => {
    return database.techs.map(tech => ({...tech}))
}
export const getWheel = () => {
    return database.wheels.map(wheel => ({...wheel}))
}
export const getOrders =() => {
    return database.customOrders.map(order => ({...order}))
}


export const setPaints = (id) => {
    database.orderBuilder.paintId = id
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnologies = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}


export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    // Add a timestamp to the order
    newOrder.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customOrders.push(newOrder)

    // Reset the temporary state for user choices
    database.orderBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
}