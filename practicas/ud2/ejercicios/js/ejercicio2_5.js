let numero = prompt('Introduce un número: ');

//opciones: cancela -> null; string -> NaN


while(isNaN(numero)||numero === null ||numero === undefined){
    numero = prompt('Introduce un número: ');
    numero = +numero;
}

alert(`Has introducido el número: ${numero}`);


/*
al convertir a number... 
"" -> 0
null -> 0
j -> NaN
"7" -> 7
0 -> 0
trim("       ") -> ""
*/