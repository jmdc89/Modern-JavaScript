import { Todo } from '../classes';

import { todoList } from '../index';

// Html references
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');


export const createTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
            <label>${ todo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;

}

//Events
txtInput.addEventListener('keyup', ( event ) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {

        console.log(txtInput.value);
        const newTodo = new Todo( txtInput.value );
        todoList.newTodo( newTodo );

        createTodoHtml( newTodo );
        txtInput.value = '';

    }
});


divTodoList.addEventListener('click', (event) => {


    const nombreElemento = event.target.localName; // input, label, button
    const todoElemento   = event.target.parentElement.parentElement;
    const todoId         = todoElemento.getAttribute('data-id');

    if (  nombreElemento.includes('input') ){ // click en el check 
        todoList.toggleTodo( todoId );
        todoElemento.classList.toggle('completed');

    } else if( nombreElemento.includes('button') ) { // hay que borrar el todo

        todoList.deleteTodo( todoId );
        divTodoList.removeChild( todoElemento );

    }

});

btnBorrar.addEventListener('click', () => {

    todoList.deleteCompleted();

    for( let i = divTodoList.children.length-1; i >= 0; i-- ) {

        const elemento = divTodoList.children[i];

        if( elemento.classList.contains('completed') ){
            divTodoList.removeChild(elemento);
        }

    }

});
