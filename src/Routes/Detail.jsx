import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import imagenDoctor from "../images/doctor.jpg"
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const context=useContext(ContextGlobal)
  const {state}=context
  const {data}=state

  const [dentista, setDentista] = useState([])
  const params = useParams()

  useEffect(() => {
    setDentista(data[params.id-1])
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