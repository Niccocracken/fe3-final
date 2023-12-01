import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const getLocalStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  };

  const [dentistas,setDentistas]=useState([])

  useEffect(()=>{
    setDentistas(getLocalStorage())
  },[])

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentistas.length 
        ? dentistas.map(dentista=>(
          <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/>))
        : null}
      </div>
    </>
  );
};

export default Favs;
