import React from "react";
import { useLocalStorage } from "./useLocalStorage";


//El siguiente elemento tiene dos componente, Provider y Cosumer
const TodoContext = React.createContext();

function TodoProvider(props){
    //Los objetos se pueden renombrar para un mejor uso, asi como esta abajo
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    //variable para conocer el estado de apertura del Modal
    const [openModal, setOpenModal] = React.useState(false);

    //La siguiente linea cuenta cuantos Todos han sido completados, una manera sencilla
    //de usar condicionales
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    //Si no hay nada escrito en el BoxText, simplemente mostrara todas las tareas
    if (!searchValue.length >= 1){
        searchedTodos = todos;
    }else{
        searchedTodos = todos.filter(todo => {
        //Se convierte el texto de todas las tareas a minuscula
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase();
        //Lo siguiente es el criterio si incluye la frase escrita en alguna de las tareas
        //Esa sera la condicion del filtro
        return todoText.includes(searchText);
        });
    }
    const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text,
        })
        saveTodos(newTodos);
    };

    const completeTodo = (text) =>{
        //Lo siguiente recolecta la posicion en el array de la tarea con el mismo texto recibido
        const todoIndex = todos.findIndex(todo => todo.text === text);
        //Creacion de un nuevo arreglo con todos los valores de las tareas
        const newTodos = [...todos];
        //Se cambia el estado de la tarea a true o hecho en todo caso
        newTodos[todoIndex].completed = true;
        //Lo mismo que la linea anterior
        // todos[todoIndex] = {
        //   text: todos[todoIndex].text,
        //   completed: true,
        // }
        saveTodos(newTodos);
    };

    const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        //Splice sirve para marcar una posicion y de alli en adelante cuantos datos eliminara
        //en este caso es en la posicion del todoIndex eliminando el UNICO dato cercano
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return(
        //Es necesario usar las dobles llaves, para enviar un objeto de JS
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};