import React from 'react';
import '../styles/TodoItem.css';
import {FaCheckCircle, FaTrashAlt} from 'react-icons/fa'

function TodoItem(props) {

  // const onComplete = () => {
  //   alert("Ya completaste la tarea: " + props.text)
  // };
  // const onDelete = () => {
  //   alert("Borraste la tarea: " + props.text)
  // };

  return (
    <li className="TodoItem"
    >
      <span 
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick = {props.onComplete}
      >
        <FaCheckCircle />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
        {props.text}
      </p>
      <span 
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        <FaTrashAlt />
      </span>
    </li>
  );
}

export { TodoItem };