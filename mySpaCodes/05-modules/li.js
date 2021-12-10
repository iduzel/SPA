
export function liStyling (li) {
    
    li.style.marginTop = '1px'
    li.style.padding = '0.1em 1em'
    li.style.color = 'white'

    li.style.width = '0'

    setTimeout(function() {
        li.style.background = generateColor()
        li.style.width = '100%'
        li.style.transition = 'width 1s'
    }, 300)

}

function generateColor() {

    const c1 = Math.floor(Math.random() * 256)
    const c2 = Math.floor(Math.random() * 256)
    const c3 = Math.floor(Math.random() * 256)

    console.log(`rgb(${c1}, ${c2}, ${c3})`)
    // rgb(0 - 255, 0 - 255, 0 - 255)
    return `rgb(${c1}, ${c2}, ${c3})`
}