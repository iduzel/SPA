import { addToDom, prependToDom } from "./dom-operations.js"
import bodyWorks from './body.js'
import { liStyling } from "./li.js"

export function inputContainer() {

    const inputContainer = addToDom('div', bodyWorks())
    inputContainer.style.width = '300px'
    inputContainer.style.marginTop = '20px'
    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'space-between'
    inputContainer.style.alignItems = 'center'

    const input = addToDom('input', inputContainer)
    input.style.flexGrow = '1'
    input.style.fontSize = '20px'
    input.style.padding = '5px'

    const icon = addToDom('i', inputContainer)
    icon.classList.add('fas', 'fa-plus-circle')
    icon.style.color = 'white'
    icon.style.marginLeft = '10px'
    icon.onclick = handleClick

    function handleClick() {

        if (input.value !== '') { // if the input is not empty

            const ul = document.querySelector('ul') // find the ul
            
            const li = prependToDom('li', ul) //li creation and add to the ul
    
            li.innerText = input.value 
            liStyling(li)
            input.value = '' // empty the input text
        }
    }

    return inputContainer
}
