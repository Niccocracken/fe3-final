import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'

const Favs = () => {
  const context=useContext(ContextGlobal)
  const {state}=context
  const {theme}=state

  const getLocalStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  };

  const [dentistas,setDentistas]=useState([])

  useEffect(()=>{
    setDentistas(getLocalStorage())
  },[])

  return (
    <main className={theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentistas.length 
        ? dentistas.map(dentista=>(
          <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/>))
        : null}
      </div>
    </main>
  );
};

export default Favs;
