import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../todoJS/TodoCounter';
import { TodoSearch } from '../todoJS/TodoSearch';
import { TodoList } from '../todoJS/TodoList';
import { TodoItem } from '../todoJS/TodoItem';
import { CreateTodoButton } from '../todoJS/CreateTodoButton';
import { Modal } from '../Modal';


function AppUI(){
    //Las siguientes lineas recolecta la informacion que esta en el Context
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        } = React.useContext(TodoContext);
    return(
        <React.Fragment> {/*Esto se usa para evitar el uso de "div"*/}
            <TodoCounter/>
            <TodoSearch/>
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
            <Modal>
                <p>Aquí se espera la teletransportación</p>
            </Modal>
            <CreateTodoButton />
        </React.Fragment>
  );
}

export {AppUI};