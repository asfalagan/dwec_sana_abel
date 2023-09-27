//un script que pida: nombre, nota examen 1, nota examen 2
let nombre = prompt('Introduce tu nombre: ');
let nota1 = prompt('Introduce la nota de tu primer examen: ');
let nota2 = prompt('Introduce la nota de tu segundo examen: ');
//muestra un mensaje que muestra el nombre y la nota media 
console.log(`Hola ${nombre}, la nota media de tus exámenes es ${(nota1 + nota2)/2}`);