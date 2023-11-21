/**
 * Crea una función llamada removeUndefined(a) 
 * que tome como parámetro un objeto 
 * y devuelva una copia del mismo 
 * en el que se han eliminado 
 * todas las propiedades cuyo valor sea undefined.
 */

let objeto = {
    "prop" : undefined,
    "nombre" : "pepe",
}

function removeUndefined(objeto){
    let r = {};

    for(let key in objeto){
        if(objeto[key] !== undefined){
            r[key] = objeto[key];
        }
    }
    return r;
}

console.log(objeto);
console.log(removeUndefined(objeto));
