import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const context=useContext(ContextGlobal)
  const {state}=context
  const {data}=state

  const [dentistas,setDentistas]=useState([])

  useEffect(()=>{
    setDentistas(data)
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