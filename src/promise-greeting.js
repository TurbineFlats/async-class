const { getNamePromise, getLanguageUsingNamePromise, getLanguageUsingIdPromise } = require("./getters")
const { greet } = require("./functions")

const id = 1

const getGreetingTuple = name => {
    return getLanguageUsingNamePromise(name).then(lang => [ name, lang ])
}

// id -> name -> language -> greeting
getNamePromise(id)
    .then(name => getGreetingTuple(name))
    .then( ([ name, lang ]) => greet(name, lang) )

// a better implementation
// id -> name    \
//    -> language -> greeting

/*
const namePromise = getNamePromise(id)
const languagePromise = getLanguageUsingNamePromise(id)

Promise.all([ namePromise, languagePromise ])
    .then(([ name, language ]) => greet(name, language))
*/
