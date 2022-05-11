import React from "react";
import ReactDOM from "react-dom";

function Modal({children}){
    return ReactDOM.createPortal(
        children,
        //Se llama el modal, este se modifico en el index.html de public con un nuevo id
        document.getElementById('modal')
    );
}

export {Modal}