let n = prompt('Introduce un número: ');
let k = prompt('Introduce un número: ');



while(isNaN(+n)||+n === null ||+n === undefined || n === ''){
    n = prompt('Introduce un número: ');
}
while(isNaN(+k)||+k === null ||+k === undefined || k === ''){
    k = prompt('Introduce un número: ');
}

for(let i = 1; i <= k; i++){
    console.log(`${n} * ${i} = ${n*i}`);
}