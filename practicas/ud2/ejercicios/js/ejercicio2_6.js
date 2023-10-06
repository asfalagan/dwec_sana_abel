let n;
let k;

do {

    n = prompt("Introduce un número válido");

} while (n === null || n.trim() == '' || isNaN(+n));//si me introducen en pantalla un '5' no lo castea a number
do {

    k = prompt("Introduce un número válido");

} while (k === null || k.trim() == '' || isNaN(+k));

for(let i = 1; i <= k; i++){
    console.log(`${n} * ${i} = ${n*i}`);
}
/*
while(isNaN(+n)||+n === null ||+n === undefined || n === ''){
    n = prompt('Introduce un número: ');
}
while(isNaN(+k)||+k === null ||+k === undefined || k === ''){
    k = prompt('Introduce un número: ');
}

for(let i = 1; i <= k; i++){
    console.log(`${n} * ${i} = ${n*i}`);
}
*/