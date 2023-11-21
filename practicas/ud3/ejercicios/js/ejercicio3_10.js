
function replaceWithPosition(str){
    let resultado = '';
    for(let char of str){
        resultado += ('abcdefghijklmnopqrstuvwxyz'.indexOf(char) + 1);
        resultado += ' ';
    }
    return resultado.trim();
}

console.log(replaceWithPosition('hola'));