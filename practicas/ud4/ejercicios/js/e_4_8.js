document.getElementById('btn')
        .addEventListener('click', () => {
            let contenedor = document.querySelectorAll('.images')[0];
            let imagenes = contenedor.querySelectorAll('img');
            Array.from(imagenes)
                 .sort( () => {
                    return Math.random() - 0.5;                   
                 })
                 .forEach((imagen) => {
                    contenedor.append(imagen);
                 })
            
        })