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
        state: false,
    });
    renderToDoList();
}
console.log((Math.random()*36).toString(36));
function renderToDoList(){
    console.log(toDos);
    //selecciono el ul del que colgarán los li
    let ulList = document.querySelector('#todos ul')//dentro del elemento con el identificador todos el ul
    ulList.innerHTML = '';
    toDos.forEach(({task, id, state}) =>{
        let liToDo = document.createElement('li');
        liToDo.classList.add('todo');
        liToDo.textContent = task;
        let spamBorrar = document.createElement('span');
        let spanDone = document.createElement('span');
        spanDone.classList.add('checker');
        spanDone.classList.add('btn');
        spanDone.textContent = 'X';
        spamBorrar.classList.add('btn');
        spamBorrar.textContent = 'Borrar';
        spamBorrar.dataset.id = id;
        spanDone.dataset.id = id;
        spamBorrar.addEventListener('click', handleEraseClick);
        spanDone.addEventListener('click', handleDoneClick);
        if(state) liToDo.classList.add('done');
        liToDo.prepend(spanDone);
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
function handleDoneClick(e){
    let doneId = e.currentTarget.dataset.id;
    let x = toDos.find(({id}) => id == doneId);
    x.state = !x.state;
    renderToDoList();
}


