import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../todoJS/TodoCounter';
import { TodoSearch } from '../todoJS/TodoSearch';
import { TodoList } from '../todoJS/TodoList';
import { TodoItem } from '../todoJS/TodoItem';
import { CreateTodoButton } from '../todoJS/CreateTodoButton';


function AppUI(){

    return(
        <React.Fragment> {/*Esto se usa para evitar el uso de "div"*/}
            <TodoCounter/>
            <TodoSearch/>
            <TodoContext.Consumer>
                {/**Se recibe una funcion */}
                {/**La funcion recibira las props necesarias del Consumer */}
                {/**Para no usar return, en vez de usar llaves, se usa parentesis */}
                {({
                    error,
                    loading,
                    searchedTodos,
                    completeTodo,
                    deleteTodo,
                }) => (
                    <TodoList>
                        {/*Si loading u otra var es true, se pondra el parrafo*/}
                        {error && <p>Se ha producido un error con éxito :3 ...</p>}
                        {loading && <p>Cargando, espere un momento por favor...</p>}
                        {(!loading && !searchedTodos.lenght) && <p>¡Crea tu primer Tarea!</p>}
                        {searchedTodos.map(todo =>(
                            <TodoItem
                            key={todo.text}
                            text = {todo.text}
                            completed = {todo.completed}
                            onComplete = {() =>completeTodo(todo.text)}
                            onDelete = {() =>deleteTodo(todo.text)}
                            />
                    ))}
                    </TodoList>
                )}
                
            </TodoContext.Consumer>
            <CreateTodoButton />
        </React.Fragment>
  );
}

export {AppUI};