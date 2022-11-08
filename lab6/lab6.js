/* reverse function reverses a string */
function reverse(str){
    return str.split("").reduce((a,b) => b+a);
}

 /* sum takes an array of numbers and returns their sum*/
 function sum(arr) {
    return arr.reduce((a, b) => a + b);
}

/* multiply takes an array of numbers and returns their product*/
function multiply(arr) {
    return arr.reduce((a, b) => a * b);
}

 /*filterLongWords() takes an array of words and an integer i 
            and returns the array of words that are longer than i.*/

function filterLongWords(arr, num) {
    return arr.filter(a => a.length > num);
}