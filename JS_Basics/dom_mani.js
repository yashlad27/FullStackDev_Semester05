// DOM -> Document Object Model 
// DOM Manipulation

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
//elemClass[0].style.background="yellow";
elemClass[0].classList.add("bg-primary");