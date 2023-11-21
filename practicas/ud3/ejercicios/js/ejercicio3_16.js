/**
 *Crea un función createPow( arr, pow ) cuyo primer parámetro
  sea un array de números y el segundo un número.
   Esta función devolverá un array donde cada elemento 
   será el resultado de elevar cada uno de los elementos
    arr a pow. 
 *
 */

    let arr = [1, 3, 5];

    function createPow(arr, pow){
        return arr.map(item => item ** pow);
    }
    
    console.log(createPow(arr, 2)); // [1, 9, 25]