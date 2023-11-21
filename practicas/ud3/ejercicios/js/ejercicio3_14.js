/**
 * Crea una función sendMessage(arr) que reciba como parámetro
 *  un array con nombres de usuarios y,
 *  para cada uno de ellos,
 *  muestre por consola una mensaje de la forma
 *  Hola, <usuario>, bienvenido al curso de DWEC.
 */
let arr = ['pepe', 'paz', 'consuelo'];

function sendMessage(arr){
    arr.forEach(function(item){
        console.log(`Hola ${item} bienvenido al curso de DWEC`);
    });
}

sendMessage(arr);