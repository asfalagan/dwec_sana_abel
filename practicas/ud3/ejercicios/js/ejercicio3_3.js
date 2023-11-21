let objeto1 = {
    "nombre" : "objeto",
    "apellido" : "de clase",
}
let objeto2 = {
    "telefono" : "987654321",
    "tipo" : "fijo",
    "nombre" : "pepin",
}
function intersectObjects(objeto1, objeto2){

//devuelve un objeto que recoge las propiedades comunes
//asigna a cada clave comun el valor que tiene en objeto1
    let resultado = {};
    for(let key in objeto1){
        if(key in objeto2){
            resultado[key] = objeto1[key];
        }
    }
    return resultado;
}
let objetoResultado = intersectObjects(objeto1, objeto2);
console.log(objetoResultado);
console.log(intersectObjects(objeto1, objeto2));