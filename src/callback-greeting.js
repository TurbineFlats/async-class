const { greet, greetingMethods } = require("./functions")
const { getName, getLanguageUsingName } = require("./getters")

const id = 1

// let greetName
// let greetLang

getName(id, name => {
    console.log(`I just got the name: ${name}`)
    getLanguageUsingName(name, lang => {
        console.log(`I just got the language: ${lang}`)
        greet( name, lang )
    })
})

// greet( greetName, greetLang )