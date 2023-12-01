import React from "react";
import imagenDoctor from "../images/doctor.jpg"
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        <img src={imagenDoctor} alt='dentista'></img>
        <h4><Link to={`../dentist/${id}`}>{name}</Link></h4>
        <p>{username}</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
