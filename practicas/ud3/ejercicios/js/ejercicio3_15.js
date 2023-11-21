/**
 * Crea una función getOdd(arr) que
 * reciba como parámetro un array con números 
 * y devuelva otro array que contenga 
 * únicamente los números del primer array 
 * que sean impares.
 */

let arr = [1, 45, 66, 97, 56];

function getOdd(arr) {
    return arr.filter( item => item % 2 != 0)
}   


console.log(getOdd(arr)); // [1, 45, 97]