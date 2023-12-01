import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const [dentistas,setDentistas]=useState([])

  const getDentistas = async()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
    const data= await res.json()
    setDentistas(data)
  }

  useEffect(()=>{
    getDentistas()
  })

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentistas.length 
        ? dentistas.map(dentista=>(
          <Card key={dentista.id} name={dentista.name} username={dentista.username} id={dentista.id}/>))
        : null}
      </div>
    </main>
  )
}

export default Home