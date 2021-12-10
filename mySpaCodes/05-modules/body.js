// export functions, classes and variables

// DEFAULT EXPORT syntax
console.log('test outside module')

export default function () {

    const body = document.body
    body.style.background = 'black'
    body.style.minHeight = '100vh'
    body.style.display = 'flex';
    body.style.justifyContent = 'center'
    body.style.alignItems = 'center'
    body.style.flexDirection = 'column'

    return body;
}

export const todo = []