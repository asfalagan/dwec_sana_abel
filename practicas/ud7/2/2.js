let url = 'https://swapi.dev/api/planets/?page=';
let prevUrl;


let dataSize;
let currentPage = 1;
let isFirstPage = true; //con esta variable comprobamos que estamos en la primera pagina para no renderizar el boton divPrev
let hasNextPage = false; //compruebo si hay una pagina siguiente para render boton divNext;

const tabla = document.createElement('div');
tabla.classList.add('tabla');
document.body.append(tabla);
const controls = document.createElement('div');
controls

async function getData() {
    const response = await fetch(url+currentPage);
    const result = await response.json();
    console.log(result);
    // dataSize = result.count;
    // result.next != null ? (hasNextPage = true) && (changeUrl(result.next)) : (hasNextPage = false);
    // isFirstPage = currentPage == 1;
    
    renderData(result);
}

function renderData(data){
    let tabla = document.getElementsByClassName('tabla')[0];
    tabla.innerHTML = '';
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
    renderControls();
}

function changeUrl(nextUrl){
    prevUrl = url;
    url = nexturl;
}

function renderControls(){
    /**
     <div class="contenedorControles">
        <div class="controls">Prev</div>
        <div class="controls">1</div>
        <div class="controls">Next</div>
     </div>
     */
    let divControls = document.createElement('div');
    let divNext = document.createElement('div');
    let divCurrent = document.createElement('div');
    let divPrev = document.createElement('div');

    divControls.classList.add('contenedorControles');

    divNext.classList.add('controles');
    divNext.dataset.nextPage = +currentPage + 1;
    divNext.textContent = 'Siguiente';

    divCurrent.classList.add('controles');
    divCurrent.textContent = currentPage;

    divPrev.classList.add('controles');
    divPrev.dataset.prevPage = +currentPage - 1;
    divPrev.textContent = 'Anterior';


    divControls.append(divPrev);
    divControls.append(divCurrent);
    divControls.append(divNext);
    document.body.append(divControls);

    

    divPrev.addEventListener('click', handlePrev);
    divNext.addEventListener('click', handleNext);

}

function handlePrev(e){
    currentPage = e.target.dataset.prevPage;
    
    getData();
}
function handleNext(e){
    currentPage = e.target.dataset.nextPage;
    
    getData();
}
getData();

//document.getElementsByClassName('contenedorControls')[0].innerHTML = '';