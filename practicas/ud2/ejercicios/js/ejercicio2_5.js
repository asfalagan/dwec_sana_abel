

let numero;

do {

    numero = prompt("Introduce un número válido");

} while (numero === null || numero.trim() == '' || isNaN(+numero));//si me introducen en pantalla un '5' equivale a z5z

numero = +numero;

console.log(`Has introducido el número: ${numero}`);

