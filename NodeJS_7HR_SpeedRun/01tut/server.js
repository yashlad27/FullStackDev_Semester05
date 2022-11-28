const os = require('os');
const path = require('path');
const math = require("./math");

console.log(math.add(2, 3))

// destructuring:
const {add, subtract, multiply, divide} = require('./math')

console.log(add(5, 10))
console.log(subtract(10, 4))
console.log(multiply(4, 9))
console.log(divide(6, 9))

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname)
console.log(__filename)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))

console.log(path.parse(__filename))