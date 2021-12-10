export function addToDom(type, parent) {

    const elementHandler = document.createElement(type)
    parent.append(elementHandler)

    return elementHandler
}



export function prependToDom(type, parent) {

    const elementHandler = document.createElement(type)
    parent.prepend(elementHandler)

    return elementHandler
}