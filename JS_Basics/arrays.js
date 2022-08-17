// ARRAYS IN JAVASCRIPT:

var arr = [1, 2, 4, 6, 8, 3, 5];
console.log(arr);

// Method-01 to iterate through array:
for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// Method-02 to iterate through array:
arr.forEach(function(element){
    console.log(element);
})

console.log("#############")