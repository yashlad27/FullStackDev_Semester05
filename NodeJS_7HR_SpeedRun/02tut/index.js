const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname, 'starter.txt'), (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.toString());
})

console.log("Hello......");

fs.writeFile(path.join(__dirname, 'lorem.txt'), ' Nice to Meet You!', (err) => {
    if (err) throw err;
    console.log('Write Complete');
})

fs.appendFile(path.join(__dirname, 'append.txt'), ' Nice to Meet You!', (err) => {
    if (err) throw err;
    console.log('Append Complete');
})


// exit on uncaught Errors:
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})