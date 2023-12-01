import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import imagenDoctor from "../images/doctor.jpg"
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const context=useContext(ContextGlobal)
  const {state}=context
  const {data,theme}=state

  const [dentista, setDentista] = useState([])
  const params = useParams()

  useEffect(() => {
    setDentista(data[params.id-1])
  }, [])

  return (
    <main className={theme}>
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
    </main>
  )
}

export default Detail