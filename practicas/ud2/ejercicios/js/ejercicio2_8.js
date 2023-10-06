
do {

    fecha = prompt('Introduce tu año de nacimiento: ');

} while (fecha === null || fecha.trim() == '' || isNaN(+fecha));
fecha = +fecha;

if (fecha >= 1994 && fecha <= 2010){
    console.log('Generación Z');
}else if(1981 <= fecha && fecha <= 1993){
    console.log('Generación Millenial');
}else if(1969 <= fecha && fecha <= 1980){
    console.log('Generación X');
}else if(1949 <= fecha && fecha <= 1968){
    console.log('Baby Boomer')
}else{
    console.log('Fecha muy lejana o muy cercana');
}


  
        

//console.log(edad<18 ? "Menor de edad" : "Mayor de edad");
