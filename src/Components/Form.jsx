import React, { useState } from "react";

const Form = () => {
  const [mensaje, setMensaje] = useState(null)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = e => {
    e.preventDefault()

    if (nombre.length < 5 || !regexEmail.test(email)){
      setMensaje(`Por favor verifique su información nuevamente`);
    } else {
      console.log(`Nombre: ${nombre}, Email: ${email}`)
      setMensaje(`Gracias ${nombre}, te contactaremos cuando antes vía mail`);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" 
        value={nombre} onChange={e => setNombre(e.target.value)}/>
        <input type="text" placeholder="Email" 
        value={email} onChange={e => setEmail(e.target.value)}/>
        <button type="submit">Send</button>
      </form>
      {mensaje && <h3>{mensaje}</h3>}
    </div>
  );
};

export default Form;