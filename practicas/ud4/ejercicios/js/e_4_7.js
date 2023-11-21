
document.getElementById('btn')
        .addEventListener('click', () => {
            let contenedor = document.getElementsByClassName('images')[0];
            let ultimaImagen = contenedor.querySelector('img:last-of-type');
            contenedor.prepend(ultimaImagen);
        })