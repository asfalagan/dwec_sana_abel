/**
 * Crea una función combineArr(arr1, arr2) 
 * que reciba como parámetro dos arrays y 
 * devuelva un array que sea el resultado de combinar 
 * los contenidos de ambos arrays.
 */
let arr1 = [1, 5, 6];
let arr2 = [1, 5, 6, 7];
function combineArr(arr1,arr2){
    return arr1.concat(arr2);
//return [...arr1, ...arr2];
}
console.log(combineArr(arr1, arr2));