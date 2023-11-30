import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import imagenDoctor from "../images/doctor.jpg"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState([])
  const params = useParams()

  const getDentista = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    setDentista(data)
  }

  useEffect(() => {
    getDentista()
  }, [])

  return (
    <>
      <h1>Detail Dentist {dentista.id} </h1>
      <div>
        <h2>{dentista.name}</h2>
        <div className='card'>
          <img src={imagenDoctor} alt="dentista" />
          <p>{dentista.email}</p>
          <p>{dentista.phone}</p>
          <p>{dentista.website}</p>
        </div>
      </div>
    </>
  )
}

export default Detail