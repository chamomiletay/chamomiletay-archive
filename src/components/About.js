//---- imports ----
import React from 'react'
import tayIcon from './images/taylor_icon.png'


const About = () => {


  return (
    <div className='px-20 font-nanum-gothic'>

      <div className='p-10 m-auto flex-auto items-center justify-center border-2 border-rose-200 bg-rose-50 shadow-md rounded-xl'>

          <div className='inline-block m-auto pb-4'>
              <img alt='profile' src={tayIcon} className='h-72 drop-shadow-md'></img>

          </div>

          <div>
              <h3 className='pt-4 pb-2 text-2xl font-semibold font-space-mono text-rose-400'>&#123; <span className='text-black italic text-rose-800'>Hello!</span> &#125;</h3>
              <p className='pb-4 text-lg font-m-plus-rounded font-semibold italic text-slate-400'>湖にちわ。</p>

              
              <p className='px-24 py-2'>
                " I'm a detail-oriented front-end engineer and designer that is passionate about cozy aesthetics. I take pride in quickly adapting to new environments, engaging in storytelling, and ideating warm and inviting interactive spaces while engaging my audience. My drive to curate more inclusive and accessible spaces is evident in every application I build. "
              </p>

          </div>
      </div>

    </div>
  )
}

export default About