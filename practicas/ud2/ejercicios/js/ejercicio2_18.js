function isTriangulable (a, b, c){
    if(a + b > c && a + c > b && b + c > a){
        return true;
    }else{
        return false;
    }
}

let mensaje = isTriangulable(1, 1, 1);
console.log(mensaje);