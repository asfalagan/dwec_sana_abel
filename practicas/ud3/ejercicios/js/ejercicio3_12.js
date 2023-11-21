/**
 * Crea una función isEqualArr(arr1, arr2) 
 * que reciba como parámetro dos arrays y 
 * devuelva true si el contenido de ambos arrays es el mismo.
 */
let arr1 = [1, 4];
let arr2 = [1, 45];
function isEqualArr(arr1, arr2){
    return arr1.toString() == arr2.toString();
}
console.log(isEqualArr(arr1, arr2));