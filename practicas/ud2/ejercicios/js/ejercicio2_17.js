
function convertCapacity(capacity, from, to){
    let desde = convertToBytes(capacity, from);
    let hasta;
    

    if(to == 'B'|| to == 'Byte'){
        hasta = 1;
    }else if(to == 'KB'||to == 'Kilobyte'){
        hasta = 1_000;
    }else if(to == 'MB'||to == 'Megabyte'){
        hasta = 1_000_000;
    }else if(to == 'GB'||to == 'Gigabyte'){
        hasta = 1_000_000_000;
    }else if(to == 'TB'||to == 'Terabyte'){
        hasta = 1_000_000_000_000;
    }else if(to == 'PB'||to == 'Petabyte'){
        hasta = 1_000_000_000_000_000;
    }else if(to == 'EB'||to == 'Exabyte'){
        hasta = 1_000_000_000_000_000_000;
    }else{
        return 'ERROR EN LOS PARAMETROS';
    }

    return desde / hasta;
}
function convertToBytes(capacity, from){
    if(from == 'B'|| from == 'Byte'){
        return capacity * 1;
    }else if(from == 'KB'||from == 'Kilobyte'){
        return capacity * 1_000;
    }else if(from == 'MB'||from == 'Megabyte'){
        return capacity * 1_000_000;
    }else if(from == 'GB'||from == 'Gigabyte'){
        return capacity * 1_000_000_000;
    }else if(from == 'TB'||from == 'Terabyte'){
        return capacity * 1_000_000_000_000;
    }else if(from == 'PB'||from == 'Petabyte'){
        return capacity * 1_000_000_000_000_000;
    }else if(from == 'EB'||from == 'Exabyte'){
        return capacity * 1_000_000_000_000_000_000;
    }else{
        return 'ERROR EN LOS PARAMETROS';
    }
}

let mensaje = convertCapacity(500, 'B', 'KB');
console.log(mensaje);