import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => {
    alert("Aquí se debería abrir el modal")
  }

  return (
    <button className="CreateTodoButton"
      onClick={onClickButton}
    >
      +
    </button>
  );
}

export { CreateTodoButton };