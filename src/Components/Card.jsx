import React from "react";
import { useNavigate } from "react-router-dom";
import imagenDoctor from "../images/doctor.jpg"


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }
  const navigate= useNavigate()
  return (
    <div className="card">
        <img src={imagenDoctor} alt='dentista'></img>
        <h4><a onClick={()=>{navigate(`../dentist/${id}`)}}>{name}</a></h4>
        <p>{username}</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
