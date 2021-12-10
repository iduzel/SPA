import moment from 'moment'
// import syntax:
// import named of function that is exported from the path of the file

// there 2 types of exports
// 1. Named exports: use the exact name of the export INSIDE {}
// 2. default exports: use any name of the export NOT IN {}

// DIFFERENCE BETWEEN NAMED AND DEFAULT EXPORTS:
// THERE CAN BE ONLY ONE DEFAULT EXPORT
// and there can be many NAMED EXPORTS
import body, {todo}  from './body.js'
import {ul} from './ul.js'
import {inputContainer} from './inputContainer.js'

// console.log(bodyFunctions.default)
const bodyWorks = body()
ul()
inputContainer()



