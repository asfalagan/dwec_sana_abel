function getFibonacciAt(n){
    let n1 = 0;
    let n2 = 1;
    let fibo;
    for(let i = 2; i < n; i++){
        fibo = n1 + n2;
        n1 = n2;
        n2 = fibo;
    }
    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        return fibo;
    }
}

let mensaje = getFibonacciAt(0);
let mensaje1 = getFibonacciAt(1);
let mensaje2 = getFibonacciAt(6);

console.log(mensaje);
console.log(mensaje1);
console.log(mensaje2);