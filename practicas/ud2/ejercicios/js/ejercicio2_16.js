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
let mensaje = convertToBytes(3, 'KB')
console.log(mensaje);