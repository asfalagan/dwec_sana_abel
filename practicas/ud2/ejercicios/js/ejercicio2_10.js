
let mayor = -Infinity;
let menor = Infinity;

for (let i = 0; i < 5; i++){
    let num = Number(prompt('Escribe un número: '));
    if(num > mayor){
        mayor = num;
    }
    if(num < menor){
        menor = num;
    }
}
console.log(`El mayor número es ${mayor} y el menor  es ${menor}`);