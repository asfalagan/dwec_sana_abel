let objeto1 = {
    "nombre" : "objeto",
    "apellido" : "de clase",
}
let objeto2 = {
    "telefono" : "987654321",
    "tipo" : "fijo",
}
function mergeObjects(objeto1, objeto2){
    let clon = {};
    for(let key in objeto1){
        clon[key] = objeto1[key];
    }
    for(let key in objeto2){
        clon[key] = objeto2[key];
    }
    return clon;
}
let mergedObject = mergeObjects(objeto1, objeto2);
console.log(mergedObject);

let a = (objeto1, objeto2) => {
    return {...objeto1, ...objeto2,}};