import React from 'react';
import '../styles/CreateTodoButton.css';

function CreateTodoButton({ setOpenModal, openModal }) {
  const onClickButton = () => {
    setOpenModal(!openModal);

    //Las siguientes lineas hace lo mismo que la linea eanterior
    // if (openModal) {
    //   setOpenModal(false);
    // } else {
    //   setOpenModal(true);
    // }
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