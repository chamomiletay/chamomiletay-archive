//---- imports ----
import React from 'react'
import tayIcon from './images/taylor_icon.png'


const About = () => {
  return (
    <div className='p-10 m-auto flex-auto items-center justify-center'>

        <div className='inline-block m-auto pb-4'>
            <p>Hello!</p>
            <img alt='profile picture' src={tayIcon} className='h-72'></img>

        </div>

    </div>
  )
}

export default About