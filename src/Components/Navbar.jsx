import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const themeContext=useContext(ContextGlobal)
  const {handleChangeTheme}=themeContext

  const onClick=()=>{
    handleChangeTheme()
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to='/' >Home</Link>
        </li>
        <li>
          <Link to='/contact' >Contact</Link>
        </li>
        <li>
          <Link to='/favs' >Favs</Link>
        </li>
      </ul>
      <button onClick={onClick}>Change theme</button>
    </nav>
  )
}

export default Navbar