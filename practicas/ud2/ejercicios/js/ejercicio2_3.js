let precioManzanas = Number(prompt('Introduce el precio por kilo de manzanas: '));
let cantidadManzanas = Number(prompt('Introduce la cantidad de manzanas: '));
let precioNaranjas = Number(prompt('Introduce el precio por kilo de naranjas: '));
let cantidadNaranjas = Number(prompt('Introduce la cantidad de naranjas: '));
let precioPlatanos = Number(prompt('Introduce el precio por kilo de plátanos: '));
let cantidadPlatanos = Number(prompt('Introduce la cantidad de plátanos: '));



let kilos = cantidadManzanas + cantidadNaranjas + cantidadPlatanos;
let importe = cantidadManzanas * precioManzanas
            + cantidadNaranjas * precioNaranjas 
            + cantidadPlatanos * precioPlatanos;


console.log(`Has comprado un total de ${kilos} y te ha costado ${importe} euros.`);