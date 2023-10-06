//funcion isPrime(n) devuelve true si el numero es primo

/**
 * NUMERO PRIMO:
 * Los números primos son aquellos que solo son divisibles entre ellos mismos y el 1,
 * es decir, que si intentamos dividirlos por cualquier otro número, el resultado no es entero.
 * Dicho de otra forma, si haces la división por cualquier número que no sea 1 o él mismo, 
 * se obtiene un resto distinto de cero.
 */

//puedo empezar a dividir en la raiz cuadrada
let numero;

do {

    numero = prompt("Introduce un número válido");

} while (numero === null || numero.trim() == '' || isNaN(+numero));//si me introducen en pantalla un '5' equivale a z5z

numero = +numero;

//esta parte funciona; me queda lo de que lo pida en bucle
function isPrime(n){
    let limite = Math.ceil(Math.sqrt(n));//math.ceil redondea hacia arriba y sqrt me da la raiz
    for(let i = 2; i <=  limite; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(numero));