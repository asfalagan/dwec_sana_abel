/**Escribe una función calc( operador, operando1, operando2 ) 
 * que reciba como parámetros una cadena con el operador y dos operandos, 
 * y devuelva el resultado de la operación indicada. 
 * Debe reconocer por lo menos seis operadores y 
 * mostrar un error en caso de invocarla con un operador erróneo.*/

function calc (operador, operando1, operando2){
    switch(operador){
        case '+':
            return operando1 + operando2;
        case '-':
            return operando1 - operando2;
        case '*':
            return operando1 * operando2;
        case '/':
            return operando1 / operando2;
        case '%':
            return operando1 % operando2;
        case '+=':
            return operando1 += operando2;
        case '-=':
            return operando1 -= operando2;
        case '*=':
            return operando1 *= operando2;
        case '/=':
            return operando1 /= operando2;
        default:
            return 'ERROR: OPERADOR NO VALIDO'
    }
}

let mensaje = calc('+', 2, 4);
console.log(mensaje);
