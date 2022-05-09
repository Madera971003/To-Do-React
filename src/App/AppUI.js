import React from 'react';
import { TodoCounter } from '../todoJS/TodoCounter';
import { TodoSearch } from '../todoJS/TodoSearch';
import { TodoList } from '../todoJS/TodoList';
import { TodoItem } from '../todoJS/TodoItem';
import { CreateTodoButton } from '../todoJS/CreateTodoButton';


function AppUI({
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodos,
    deleteTodo,
}){
    return(
        <React.Fragment> {/*Esto se usa para evitar el uso de "div"*/}
            <TodoCounter 
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
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
                    onComplete = {() =>completeTodos(todo.text)}
                    onDelete = {() =>deleteTodo(todo.text)}
                    />
            ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
  );
}

export {AppUI};