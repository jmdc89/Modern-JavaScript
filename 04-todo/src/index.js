import './styles.css';

import { Todo, TodoList } from './classes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

const todoList = new TodoList();

const tarea  = new Todo('Aprender JavaScript');
const tarea2 = new Todo('Comprar un unicornio');

todoList.newTodo(tarea);
todoList.newTodo(tarea2);


console.log( todoList );
