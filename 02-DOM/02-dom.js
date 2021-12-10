/**
 * Traversing: Jumping from one element to it's relatie
 */

const body = document.body
body.style.backgroundColor = 'black'
body.style.minHeight = '100vh'
body.style.padding = '30px'

// Word generator --> create words with 1-5 random letters

function wordGenerator() {

    const wordLength = Math.ceil(Math.random() * 5)

    let word = ''

    for (let i = 0; i < wordLength; i++) {
        word += letterGenerator()
    }

    return word
}




//Letter Generator --> creates random letters
function letterGenerator() {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'

    let index = ''
    index += alphabet.charAt(Math.floor(Math.random() *
        25));



    return alphabet[index]
}