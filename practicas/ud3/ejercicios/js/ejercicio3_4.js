/**
 * Crea una función llamada containsObject(a, b) 
 * que devuelve true si todas las propiedades del objeto 
 * b existen en el objeto a y false en caso contrario. 
 * El valor de las propiedades es indiferente.
 */
let a = {
    "nombre" : "objeto",
}
let b = {
    "telefono" : "987654321",
    "tipo" : "fijo",
    "nombre" : "pepin",
}
let c = {
    "nombre" : "abel",
    "ciudad" : "leon",
}
let d = {};
Object.assign(d, c);
function containsObject(a, b){
    for(let key in b){
        if(!(key in a)){//si una clave de b no está en a -> a no contiene b
            return false;
        }
    }
    return true;//todas las claves de b están en a -> a contiene b
}

console.log(containsObject(a, b));
console.log(containsObject(b, a));
console.log(containsObject(c, d));