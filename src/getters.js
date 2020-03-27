// callbacks
const getName = (id, callback) => {
    setTimeout(() => callback("Turbine Flats"), 1000)
}

const getLanguageUsingId = (id, callback) => {
    setTimeout(() => callback("english"), 1000)
}

const getLanguageUsingName = (name, callback) => {
    setTimeout(() => callback("english"), 1000)
}

// promises
const getNamePromise = id => new Promise(resolve => {
    getName(id, resolve)
})

const getLanguageUsingNamePromise = name => new Promise(resolve => {
    getLanguageUsingName(name, resolve)
})

const getLanguageUsingIdPromise = id => new Promise(resolve => {
  getLanguageUsingId(id, resolve)  
})

module.exports = {
    getName,
    getLanguageUsingName,
    getLanguageUsingId,
    getNamePromise,
    getLanguageUsingIdPromise,
    getLanguageUsingNamePromise
}
