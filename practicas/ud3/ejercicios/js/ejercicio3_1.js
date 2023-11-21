let objeto = {
    "nombre" : "objeto",
    "apellido" : "de clase",
}

function cloneObject(objeto){
    let clon = {};
    for(let key in objeto){
        clon[key] = objeto[key];
    }
    return clon;
}
console.log(cloneObject(objeto));