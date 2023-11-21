function countLetters(str){
    let objeto = {};
    for(let char of str){
      objeto[char]  = char in objeto ? objeto[char] + 1 : 1;
    }
    return objeto;
}

console.log(countLetters('hoooola'));