import React from 'react'
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';

// const defaultTodos = [
//   {text: 'Cortas cebolla', completed: false},
//   {text: 'Tomar un curso de React', completed: false},
//   {text: 'Hacer la tarea', completed: false},
//   {text: 'Alguna otra tarea', completed: false}
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
