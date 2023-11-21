function removeVowels(str){
    str = str.toLowerCase();
    let resultado = '';
    for(let char of str){
        if(!'aeiou'.includes(char)){
            resultado = resultado + char;
        }
    }
    return resultado;
}

console.log(removeVowels('apendice'));