
export class TodoList {

    constructor() {

        this.todos = [];
    }

    newTodo( todo ) {
        this.todos.push( todo );
    }

    deleteTodo( id ) {

        this.todos = this.todos.filter( todo => todo.id != id )
        // this.guardarLocalStorage();

    }

    toggleTodo( id ) {

        for( const todo of this.todos ) {

            if ( todo.id == id ) {

                todo.completado = !todo.completado;
                break;

            }
        }


    }

    deleteCompleted() {

    }
}