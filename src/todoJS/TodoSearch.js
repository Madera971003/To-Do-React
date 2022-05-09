import React from 'react';
import '../styles/TodoSearch.css';

// class Componente extends React.Component{ //Una forma de trabajar clases
//   constructor(){
//     this.state = {
//       patito: 'Juan'
//     };
//   }
  
//   render(){
//     return(
//       <div onClick={() => this.setState('Enrique')}>{this.state.patito}</div>
//     )
//   }
// }

function TodoSearch({searchValue, setSearchValue}) {

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