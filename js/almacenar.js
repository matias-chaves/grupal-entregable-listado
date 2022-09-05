let input_item = document.getElementById('item');
let item_container = document.getElementById('contenedor');
let add = document.getElementById('agregar');
let clean = document.getElementById('limpiar');


//funcion que guarda inputs en el localstorage
function saving_items(){
    if(localStorage.getItem('item') == null){
        localStorage.setItem('item','[]')
    }

    //le paso el valor del localstorage = [] entonces se convierte en un array
    let array_storage = JSON.parse(localStorage.getItem('item'));

    //pusheo el valor del input
    array_storage.push(input_item.value);

    //guardo el array en formato de texto
    localStorage.setItem('item', JSON.stringify(array_storage));


    //muestro los elementos mediante DOM
    let list_item = document.createElement('li');
    list_item.classList.add('list-group-item');
    list_item.innerText = input_item.value;
    item_container.appendChild(list_item);

}

//funcion de carga de elementos en el DOM
function getElements(){
    let elementos_cargados = JSON.parse(localStorage.getItem('item'));

    console.log(elementos_cargados);

    elementos_cargados.forEach(element => {
        let list_item = document.createElement('li');
        list_item.classList.add('list-group-item');
        list_item.innerText = element;
        item_container.appendChild(list_item);
    });
}

//funcion de limpiar items
function cleaning_items(){
    localStorage.removeItem('item');

    item_container.innerHTML = ""
}

//botones y carga del dom
document.addEventListener('DOMContentLoaded',getElements);
add.addEventListener('click',saving_items);
clean.addEventListener('click',cleaning_items);












// clean.addEventListener('click',cleaning_items);

// function cleaning_items(){
//     window.localStorage.removeItem("nuevo");
//     item_container.innerHTML = "";
// }






//ESTILO LISTA

