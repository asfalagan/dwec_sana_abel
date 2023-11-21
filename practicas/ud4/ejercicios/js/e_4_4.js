/*
Añade un script a la página que puedes encontrar aquí que muestre la siguiente información en los elementos <div> del final:

    Número de párrafos que hay en la página
    Dirección a la que enlaza el penúltimo enlace
    Número de enlaces que apuntan a https://google.es
    Número de palabras del segundo párrafo

*/
//numero de parrafos
let parrafos = document.getElementsByTagName('p');
let lengthParrafos = parrafos.length;
console.log(lengthParrafos);
//direccion del penultimo enlace
let enlaces = document.getElementsByTagName('a');
let ultimoEnlace = enlaces[enlaces.length - 2].href;
console.log(ultimoEnlace);
//numero de enlaces que apuntan a https://google.es{
console.log(Array.isArray(enlaces));
let arrEnlaces = Object.values(enlaces);
let numeroEnlacesGoogle = arrEnlaces.reduce( (acum, item) => {
                                    console.log(item.href);
                                    if(item.href == 'https://www.google.es/'){
                                        return ++acum;
                                    }else{
                                        return acum;
                                    }
}, 0);
console.log(numeroEnlacesGoogle);
//otra forma de resolver enlaces a google
let linksGoogle = Array.from(enlaces)
                 .map(item => item.href)
                 .reduce((acum, enlace) => {
                    return enlace == 'https://www.google.es/' ? acum + 1 : acum;
                 }, 0);
console.log(linksGoogle);
//Array.from() y Object.values() son equivalentes
//la forma mas rapida es: 
let numGoogle = document.querySelectorAll('[href = "https://www.google.es"]').length;
console.log(numGoogle);
//numero de palabras del segundo parrafo
let arrParrafos = Object.values(parrafos);
let numeroPalabrasSegundoParrafo = arrParrafos[1].textContent.trim().split(' ').length;
console.log(numeroPalabrasSegundoParrafo);