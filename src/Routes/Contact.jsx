import React, { useContext } from 'react'
import Form from '../Components/Form'
import { ContextGlobal } from '../Components/utils/global.context'

const Contact = () => {
  const context=useContext(ContextGlobal)
  const {state}=context
  const {theme}=state
  return (
    <main className={theme}>
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
    </main>
  )
}

export default Contact