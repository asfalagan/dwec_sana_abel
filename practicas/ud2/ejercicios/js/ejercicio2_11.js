let numero;
do {

    numero = prompt("Introduce un número válido");

} while (numero == null || numero.trim() == '' || isNaN(+numero) || Number(numero) <= 0);

console.log(numero%2 == 0 ? `El número ${numero} es par`: `El número ${numero} es impar`); 
