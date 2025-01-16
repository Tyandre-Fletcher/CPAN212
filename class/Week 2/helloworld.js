const sayHi = (name) => {
    console.log("Hello " + name);
}

const sayHi2 = (name) => {
    console.log(`Whats up ${name}`)
}

const sayHi3 = (name) => {
    return `whats goody ${name}`

//Creating a module
module.exports = {sayHi, sayHi3}