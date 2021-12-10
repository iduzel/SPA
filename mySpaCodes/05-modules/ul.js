import { addToDom } from "./dom-operations.js"
import body from './body.js'

export const ul = () => {

    const ulEl = addToDom('ul', body())
    ulEl.style.width = '300px'
    ulEl.style.height = '400px'
    ulEl.style.background = 'white'
    ulEl.style.listStyle = 'none'
    ulEl.style.overflowY = 'auto'

    return ulEl
}