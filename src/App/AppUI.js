import React from 'react';
import { TodoCounter } from '../todoJS/TodoCounter';
import { TodoSearch } from '../todoJS/TodoSearch';
import { TodoList } from '../todoJS/TodoList';
import { TodoItem } from '../todoJS/TodoItem';
import { CreateTodoButton } from '../todoJS/CreateTodoButton';


function AppUI({
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