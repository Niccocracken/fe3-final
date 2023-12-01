import React from "react";
import imagenDoctor from "../images/doctor.jpg"
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const getLocalStorage = () => {
    const localData = localStorage.getItem("favs");
    return localData ? JSON.parse(localData) : [];
  };

  const addFav = ()=>{
    const favs = getLocalStorage();
    favs.push({ name, username, id });

    localStorage.setItem('favs', JSON.stringify(favs));
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
