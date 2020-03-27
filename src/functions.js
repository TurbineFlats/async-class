// Functions are first class objects

const english  = name => `Hello, ${name}`
const french   = name => `Bonjour, ${name}`
const japanese = name => `Konnichiwa, ${name}`

const makeGreeting = (name, method) => method(name)

makeGreeting("Turbine Flats", english) /*?*/

// helpers
const greetingMethods = {
    english,
    french,
    japanese,
}

const greet = (name, language) => console.log(makeGreeting(name, greetingMethods[language]))

module.exports = {
    greet,
}
