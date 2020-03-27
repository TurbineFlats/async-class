const { fibonacci: bigDumbMathProblem } = require("./fibonacci")

// 1. Callback after 3 seconds
// 2. Callback after 0 seconds
// 3. Callback after fibonacci number

console.log("Hi, let's get started!")

// setTimeout(<callback>, <msecs>)
setTimeout(() => {
	console.log("Where am I?")
}, 3000)

console.log("What now?")

// console.log(bigDumbMathProblem(45))
