const { getName, getLanguage } = require("./getters")

const handleSuccess = val => console.log(`That was successful! ${val}`)
const handleError = err => console.log(`I got an error! ${err}`)

// 1. Promise with no then
// 2. Promise with then
// 3. Promise with then and catch

// thenFunction: undefined
// catchFunction: undefined
// resolve = x => thenFunction(x)
// reject = x => catchFunction(x)

const myPromise = new Promise((resolve, reject) => {
    console.log("I'm already executing")
    setTimeout(() => resolve("Where am I?"), 1000)
})

// console.log(myPromise)

/*
const myBadPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Uh-Oh!"), 1000)
})
*/
