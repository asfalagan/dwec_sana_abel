/**
 * Vamos a suponer que tenemos un arrays con cadenas 
 * que incluyen fechas de la forma DD-MM-YYYY 
 * donde DD es el día, MM es el mes y YYYY es el año. 
 * Desarrolla una función sortDates( arr ) 
 * que devuelva un array con las mismas fechas ordenadas 
 * cronológicamente. 
 * El objetivo de este ejercicio es prácticar 
 * con la manipulación de cadenas y métodos de arrays, 
 * por lo que no debes utilizar 
 * las funciones de JavaScript para trabajar con fechas.
 */

let arr = ['24-05-2020', '02-12-2018', '14-02-2020'];
console.log(arr);
function sortDates(arr){
    let clon = arr.slice(0, arr.length)
    for(let key in arr){
        arr[key] = arr[key].split('-');
        arr[key].reverse();
        arr[key] = arr[key].toString();
        arr[key] = arr[key].replaceAll(',','');
        arr[key] = Number(arr[key]);
    };
    arr.sort((a, b) => a-b);
    for(let key in arr){
        arr[key] = arr[key].toString();
        arr[key] = arr[key].slice(0, 4)+'-'+arr[key].slice(4,6)+'-'+arr[key].slice(6,8);
        arr[key] = arr[key].split('-');
        arr[key] = arr[key].reverse();
        arr[key] = String(arr[key]);
        arr[key] = arr[key].replaceAll(',','-');
    };
    let x = arr;
    arr = clon;
    return x;
}


console.log(arr);
console.log(sortDates(arr));


