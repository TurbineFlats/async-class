const wait = seconds => new Promise(resolve => setTimeout(resolve, seconds * 1000))

const myAsyncFunction = async () => {
    console.log("Let's start")

    const twoSecTimer = wait(2)
    await twoSecTimer
    console.log("I waited two seconds!")

    const threeSecTimer = wait(3)
    await threeSecTimer
    console.log("I waited five seconds!")
}

// myAsyncFunction()

const myTimers = myAsyncFunction()

console.log(myTimers)
myTimers.then(() => console.log("I'm done!"))