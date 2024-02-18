const url = 'https://swapi.dev/api/planets/';


function renderData(data) {
    const tabla = document.createElement('div');
    tabla.classList.add('tabla');
    data.results.forEach(element => {
        const fila = document.createElement('div');
        fila.classList.add('fila');

        const nombre = document.createElement('span');
        nombre.classList.add('celda');
        const clima = document.createElement('span');
        clima.classList.add('celda');
        const terreno = document.createElement('span');
        terreno.classList.add('celda');
        const poblacion = document.createElement('span');
        poblacion.classList.add('celda');
        const tieneAgua = document.createElement('span');
        tieneAgua.classList.add('celda');

        nombre.textContent = element.name;
        clima.textContent = element.climate;
        terreno.textContent = element.terrain;
        poblacion.textContent = element.population;
        tieneAgua.textContent = element.surface_water;

        fila.append(nombre);
        fila.append(clima);
        fila.append(terreno);
        fila.append(poblacion);
        
        fila.append(tieneAgua);
        
        tabla.append(fila);
    });
    document.body.append(tabla);
}


async function getData() {
    const response = await fetch(url);
    const result = await response.json();
    renderData(result);
}

getData();

