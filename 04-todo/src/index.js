import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

const tarea  = new Todo('Aprender JavaScript');
todoList.newTodo(tarea);


console.log( todoList );

createTodoHtml( tarea );
