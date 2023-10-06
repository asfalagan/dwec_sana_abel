//funcion fact que calcula el factorial de un numero
let numero = 4;
function fact(n){
    let resultado = 1;
    let cont = n; 
    do{
        resultado *= cont;
        cont--;
    }while(cont > 0);
    return resultado;
}

let x = fact(numero);
console.log(x);


//con recursividad: 

function fact2(){
    //en el factorial de 1 se acabaria la recursividad
    if(num == 1){
        return 1;
    }else{
        return (num * fact(num - 1));
    }
    //equivale a: 
    //return (num == 1) ? 1 : num * fact(num-1);
}