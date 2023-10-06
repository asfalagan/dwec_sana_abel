function isTriangulable (a, b, c){
    if((a + b > c) && (a + c > b) && (b + c > a)){
        return true;
    }else{
        return false;
    }
}

let mensaje = isTriangulable(1, 1, 1);
console.log(mensaje);

//con arrow functions: 
//let isTriangle = (a, b, c) => (a + b > c) && (a + c > b) && (b + c > a);
//equivalente a: 
/**
 * let isTriangle = function(a, b, c){
 *  return (a + b > c) && (a + c > b) && (b + c > a);
 * }
 */