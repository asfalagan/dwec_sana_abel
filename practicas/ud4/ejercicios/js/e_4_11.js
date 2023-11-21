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
    //voy a evitar que si añade cadenas vacias no las incluya
    if(txt) toDos.push(txt);
    renderToDoList();
}

function renderToDoList(){
    //selecciono el ul del que colgarán los li
    let ulList = document.querySelector('#todos ul')//dentro del elemento con el identificador todos el ul
    ulList.innerHTML = '';
    toDos.forEach(element =>{
        let liToDo = document.createElement('li');
        liToDo.classList.add('todo');
        liToDo.textContent = element;
        ulList.append(liToDo);
    })
}