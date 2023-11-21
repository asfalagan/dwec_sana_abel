//correccion de victor

//variables globales

let toDos = [];

//selecciono el boton y le añado un listener 

document
    .getElementById('add-button')
    .addEventListener('click', handlerAddClick);

//funciones handlers
function handlerAddClick(){
    let txt = document
                .getElementById('input-text')
                .value
                .trim();
    document
        .getElementById('input-text')
        .value = '';
    //voy a evitar que si añade cadenas vacias no las incluya
    if(txt) toDos.push({
        task: txt,
        id: Math.trunc((Math.random()*36**4)).toString(36).padStart(4, '0'),//si quisiera mas digitos cambiaria el 4; con padStart hago que si no llega a 4 caracteres me lo rellene con ceros 
    });
    renderToDoList();
}
console.log((Math.random()*36).toString(36));
function renderToDoList(){
    //selecciono el ul del que colgarán los li
    let ulList = document.querySelector('#todos ul')//dentro del elemento con el identificador todos el ul
    ulList.innerHTML = '';
    toDos.forEach(({task, id}) =>{
        let liToDo = document.createElement('li');
        liToDo.classList.add('todo');
        liToDo.textContent = task;
        let spamBorrar = document.createElement('span');
        spamBorrar.classList.add('btn');
        spamBorrar.textContent = 'Borrar';
        spamBorrar.dataset.id = id;
        spamBorrar.addEventListener('click', handleEraseClick);
        liToDo.append(spamBorrar);
        ulList.append(liToDo);
    });
}

function handleEraseClick(e){
    //¿Como se que boton he pulsado y por tanto que tarea tengo que borrar? -> atributo personalizado
    let eraseId = e.currentTarget.dataset.id;
    toDos = toDos.filter(({id}) => !(eraseId == id));
    renderToDoList();
}
/**
 * IDEAL _> que la lista sea un objeto y que cada tarea tenga un ID y un task que seria la cadena
 * OBSERVA LAS DIFERENCIAS DE ESTO: 
 * let btn = document.createElement('button');
 * btn.dataset.id = lista[0].id;
 * btn.id = lista[0].id; 
 * btn.textContent = lista[0].task;
 * btn.classList.add('btn');
 * 
 * btn.addEventListener('click',handleClick);
 * function handleClick(e){
 *      console.log(e.currentTarget.dataset.id);
 * }
 * 
 */
