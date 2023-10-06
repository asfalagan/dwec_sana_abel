function isNumber(n){
    n = n.trim()
    if(n === null || n == '' || isNaN(+n)){
        return false;
    }else{
        return true;
    }
}

let mensaje1 = isNumber('ddff'); //-> false
let mensaje = isNumber('  5');//-> true

console.log(mensaje1);
console.log(mensaje);