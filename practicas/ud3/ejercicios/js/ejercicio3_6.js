function convertBase(str, baseFrom, baseTo){
    //convertimos a decimal con el parametro radix
    let n = Number.parseInt(str, baseFrom);
    //convertimos de base decimal a baseTo
    n = n.toString(baseTo);
    return n;
}

console.log(convertBase('10111', 2, 10));

/**
 * USANDO ARROW FUNCTION
 * 
 * let convertBase = (str, baseFrom, baseTo) => parseInt(str,baseFrom).toString(baseTo);
 * let convertBase = (str, baseFrom, baseTo) => {
 *  return parseInt(str,baseFrom).toString(baseTo)
 * };
 */