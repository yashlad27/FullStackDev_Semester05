// Conditionals If Statements
let customerIsBanned = true;
let soup = "chicken noodle soup";
let reply;
let crackers = true;

if (customerIsBanned) {
    reply = "No soup for you!"
}else if (soup && crackers) {
    reply = `Here's your order of ${soup}`;
}else {
    reply = `Sorry we no ${soup}`;
}

console.log(reply);