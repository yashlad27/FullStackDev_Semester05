// Method-01: Function

function sayHello() {
    console.log("Hellow");
}
sayHello();

// Method-02: Function Expression

var sayBye = function() {
    console.log("Bye");
}
sayBye();

// here function has no name so it's an ANONYMOUS FUNCTION!

function sing(song) {
    console.log(song);
    //console.log("EEEEEEE");
}

sing("Laaa deee da");
sing("AAAAAAA");

function multiply(a, b){
    //console.log(a,b);
    //return a*b;

    // bcuz of return it cannot enter this part of code as it has exited
    // return b;
    // return a;
    // if(a>b){
    //     return "Thats too hard";
    // }else {
    //     a*b;
    // }

    return a*b;
}
alert(multiply(5, 10));

var total = multiply(4, 5);
alert(total);

// parameters and arguments
// function(arguments(parameter1, parameter2))

