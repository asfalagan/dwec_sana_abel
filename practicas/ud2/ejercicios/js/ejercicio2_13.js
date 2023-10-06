let numero;
do {

    numero = prompt("Introduce un número válido");

} while (numero == null || numero.trim() == '' || isNaN(+numero));
numero = +numero;

function isPrime(n){
    let limite = Math.ceil(Math.sqrt(n));//math.ceil redondea hacia arriba y sqrt me da la raiz
    for(let i = 2; i <=  limite; i++){
        if(n%i == 0){
            return false;
        }
    }
    return true;
}

let k = numero;
let cont = 0;
let i = 2;
do{
    if(isPrime(i)){
        console.log(i);
        cont++;
    }
    i++;
}while(cont<k);