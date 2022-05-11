import React from "react";
import { TodoContext } from "../TodoContext";
import '../styles/Form.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('');
    //Las variables que se usan del React
    const{
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault(); //Evita recargar la pagina
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nueva</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Escribe una Tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="button-Cancel TodoForm-button TodoForm-button-cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="button-Add TodoForm-button TodoForm-button-add"
                >
                    Añadir
                </button>
            </div>
        </form>
        
    )
};

export {TodoForm};