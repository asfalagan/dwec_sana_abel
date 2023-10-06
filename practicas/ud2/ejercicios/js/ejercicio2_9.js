let calle = prompt('Escribe el nombre de tu calle: ');
console.log(calle);

if(calle.toLowerCase() == ('calle los claveles' || 'calle el rosal' || 'calle las hortensias' || 'calle las margaritas') ){
    console.log(`Tienes que tomar la Línea 1 para ir desde ${calle} hasta el trabajo`);
}else if(calle.toLowerCase() == ('calle teleno' || 'calle caoute' || 'calle peña ubiña' || 'calle vizcodillo')){
    console.log(`Tienes que tomar la Línea 2 para ir desde ${calle} hasta el trabajo`);
}else if(calle.toLowerCase() == ('calle astorga' || 'calle la bañeza' || 'calle benavente')){
    console.log(`Tienes que tomar la Línea 3 para ir desde ${calle} hasta el trabajo`);
}

