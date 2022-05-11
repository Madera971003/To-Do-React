import React from "react";

//Esto es un Custom React Hook
function useLocalStorage(itemName, initialValue){
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          //la version de TODOS_V1 fue cambiado a itemName
          //Las palabras Todos por Item
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          }else{
            //Los datos se transforman con JSON ya que aun son solo string
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }catch(error){
          setError(error) //Tambien se puede mandar un true
        }
      }, 1000)
    });
  
    //Esta parte sirve para guardar los datos en local Storage; ya sea que se
    //complete la tarea o que se elimine
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }catch(error){
        setError(error)
      }
    };
    //Usar en el return {}, se toma en cuenta como sifuera un objeto
    //Despues de dos retornos, se recomienda usar llaves
    return {
      item,
      saveItem,
      loading,
      error
    };
  
  }

export { useLocalStorage }