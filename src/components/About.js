//---- imports ----
import React from 'react'
import tayIcon from './images/taylor_icon.png'


const About = () => {


  return (
    <div className='px-20 font-nanum-gothic'>

      <div className='p-10 m-auto flex-auto items-center justify-center border-4 border-purple-100 bg-rose-50 shadow-md rounded-xl'>

          <div className='inline-block m-auto pb-4'>
              <img alt='profile' src={tayIcon} className='h-72 drop-shadow-md'></img>

          </div>

          <div>
              <h3 className='pt-4 text-2xl m-plus-rounded italic'>Hello!</h3>
              <p className='pb-4 text-lg m-plus-rounded italic text-slate-500'>湖にちわ</p>

              <p className='px-24'>
                I'm a detail-oriented front-end engineer and designer that is passionate about cozy aesthetics. I take pride in quickly adapting to new environments, engaging in storytelling, and ideating warm and inviting interactive spaces while engaging my audience. My drive to curate more inclusive and accessible spaces is evident in every application I build.
              </p>

          </div>
      </div>

    </div>
  )
}

export default About