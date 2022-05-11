import React from "react";
import '../styles/TodoCounter.css';
import { TodoContext } from "../TodoContext";
// const estilos = {
//     color: 'red',
//     backgroundColor: 'yellow',
// };

function TodoCounter(){
    //Se deben usar los mismos nombres que el Context para no causar error
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return(
        //*<h2 style={estilos}>Has completado 2 de 3 Tareas</h2>*/},{/*Una forma de poner estilos*/}
        <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} Tareas</h2>
    );
}
//*Este caso exigira usar el nombre real para realizar la emportacion*/
export {TodoCounter}; {/*Usar el export default, puede ocasionar conflictos y confundirse de nombre */}