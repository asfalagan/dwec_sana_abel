let k;
let resultado = '';
do {

    k = prompt("Introduce un número válido");

} while (k === null || k.trim() == '' || isNaN(+k));

for(let i = 1 ; i <= k; i++){
    resultado = resultado + '*';
    console.log(resultado);
}