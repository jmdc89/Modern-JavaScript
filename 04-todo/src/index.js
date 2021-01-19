import './styles.css';

import { Todo, TodoList } from './classes';
import { createTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class.js';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach( todo => createTodoHtml(todo));
