import React from 'react'
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {text: 'Cortas cebolla', completed: false},
//   {text: 'Tomar un curso de React', completed: false},
//   {text: 'Hacer la tarea', completed: false},
//   {text: 'Alguna otra tarea', completed: false}
// ];

//Esto es un Custom Hook
function useLocalStorage(itemName, initialValue){

  //la version de TODOS_V1 fue cambiado a itemName
  //Las palabras Todos por Item
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue;
  }else{
    //Los datos se transforman con JSON ya que aun son solo string
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  //Esta parte sirve para guardar los datos en local Storage; ya sea que se
  //complete la tarea o que se elimine
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [
    item,
    saveItem
  ];

}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

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
    saveTodos(newTodos);
  };
  console.log("Render antes del Use Effect");

  //Este React Hook se ejecutara hasta que se terminen todos los demas calculos internos
  //Si como segundo argumento se le pone un [] vacio, se renderizara solo una vez
  //El UseEffect renderizara solo cuando las variables en el array sufren un cambio
  // React.useEffect(() => {
  //   console.log("Use effect");
  // }, [totalTodos]);
  // console.log("Render luego del Use Effect");

  const deleteTodo = (text) =>{
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //Splice sirve para marcar una posicion y de alli en adelante cuantos datos eliminara
    //en este caso es en la posicion del todoIndex eliminando el UNICO dato cercano
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
