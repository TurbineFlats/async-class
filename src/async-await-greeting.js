const { getNamePromise, getLanguageUsingIdPromise } = require("./getters")
const { greet } = require("./functions")

const id = 1

const asyncGreet = async id => {
    const namePromise = getNamePromise(id)
    const langPromise = getLanguageUsingIdPromise(id)

    greet(await namePromise, await langPromise)
}

asyncGreet(id)
