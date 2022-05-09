import React from 'react'
import { AppUI } from './AppUI';

const defaultTodos = [
  {text: 'Cortas cebolla', completed: false},
  {text: 'Tomar un curso de React', completed: false},
  {text: 'Hacer la tarea', completed: false},
  {text: 'Alguna otra tarea', completed: false}
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
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
    setTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //Splice sirve para marcar una posicion y de alli en adelante cuantos datos eliminara
    //en este caso es en la posicion del todoIndex eliminando el UNICO dato cercano
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
