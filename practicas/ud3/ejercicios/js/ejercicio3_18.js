/**
 * Crea una función max( arr ) que recoja 
 * un array de números y devuelva el valor máximo.
 *  Este ejercicio es para practicar 
 * con la función reduce, 
 * por lo que debes utilizar esta función para hacerlo.
 */

let arr = [1, 6, 45, 3];
let max = arr.reduce((acum, item) =>{
    if(acum < item){
        acum = item;
    }
    return acum;
}, -Infinity);
console.log(max);