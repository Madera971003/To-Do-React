import React from "react";
import '../styles/TodoCounter.css';
// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow',
// };

function TodoCounter({total, completed}){
    return(
        //*<h2 style={estilos}>Has completado 2 de 3 Tareas</h2>*/},{/*Una forma de poner estilos*/}
        <h2 className='TodoCounter'>Has completado {completed} de {total} Tareas</h2>
    );
}
//*Este caso exigira usar el nombre real para realizar la emportacion*/
export {TodoCounter}; {/*Usar el export default, puede ocasionar conflictos y confundirse de nombre */}