function countVowels(str){
    let cadena = str.toLowerCase();
    let vocales = 0;
    //recorremos la cadena con un for of
    for(let char of cadena){
        if('aeiou'.includes(char)){
            vocales++;
        }
    }
    return vocales;
}

console.log(countVowels('aeioure'));