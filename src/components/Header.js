//---- imports ----
import React from 'react'
import logo from './images/logo2.PNG'
import { Link } from 'react-router-dom'
import './main.css'


const Header = () => {

  
  return (
    <div className='p-10 m-auto flex-auto items-center justify-center'>

      <div className='inline-block m-auto pb-4'>
        <Link to='/'>
          <img alt='logo' src={logo} className='h-24'></img>
        </Link>
      </div>
      
      <div>
        <p className='font-nanum-gothic text-zinc-500'>Taylor Lee | Front-End Engineer | Illustration </p>
      </div>

    </div>
  )
}

export default Header