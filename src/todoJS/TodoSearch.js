import React from 'react';
import '../styles/TodoSearch.css';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onSearchValueChange = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  // const estado = (event) => {
  //   if (event.target.value === ""){
  //     setPatito('Juan');
  //   }
  //   else{
  //     setPatito('Enrique')
  //   };
  // }

  return (
    <input 
      className="TodoSearch"
      placeholder="Buscar Tarea"
      value={searchValue}
      onChange={onSearchValueChange}
      // onChange={estado}
    />
    );
}

export { TodoSearch };