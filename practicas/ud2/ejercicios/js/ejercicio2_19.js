function sumOfMults(k, n){
    let suma = 0;
    do{
        suma = suma + (k * n);
        k--;
    }while(k > 0);
    return suma;
}

let mensaje = sumOfMults (5, 3);
console.log(mensaje);