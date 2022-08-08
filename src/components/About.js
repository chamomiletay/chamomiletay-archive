//---- imports ----
import React from 'react'
import tayIcon from './images/taylor_icon.png'


const About = () => {


  return (
    <div className='px-20 pb-20 font-nanum-gothic'>

      <div className='p-10 m-auto flex-auto items-center justify-center border-2 border-rose-200 bg-rose-50 shadow-md rounded-xl'>

        <div className='inline-block m-auto pb-4'>
          <img alt='profile' src={tayIcon} className='h-72 drop-shadow-md'></img>
        </div>


        <div>
          <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-rose-400'>&#123; <span className='text-black italic text-rose-800'>Hello!</span> &#125;</h3>
              {/* <p className='pb-4 text-lg font-m-plus-rounded font-semibold italic text-slate-400'>湖にちわ。</p> */}

          <p className='px-24 py-2'>
                " I'm a detail-oriented front-end engineer and designer that is passionate about cozy aesthetics. I take pride in quickly adapting to new environments, engaging in storytelling, and ideating warm and inviting interactive spaces while engaging my audience. My drive to curate more inclusive and accessible spaces is evident in every application I build. "
          </p>
        </div>
      </div>

      {/* My coding languages */}

    <div className='py-6 pb-8 my-6 flex-auto items-center justify-center border-2 border-rose-200 bg-rose-50 shadow-md rounded-xl'>

      <div className='pb-8 px-4 mx-6 font-space-mono text-sm font-semibold text-sky-900'>

        <h4 className='pb-6 text-lg font-semibold font-space-mono text-rose-400'>&#123; <span className='text-black italic text-rose-800'>Programming Languages</span> &#125;</h4>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          React
        </p>
              
        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          Javascript
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          Python
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          HTML
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          CSS
        </p>

      </div>


      {/* Libraries & frameworks */}
            
      <div className='pt-2 pb-8  px-4 m-4 font-space-mono text-sm font-semibold text-sky-900'>

        <h4 className='pb-6 text-lg font-semibold font-space-mono text-rose-400'>&#123; <span className='text-black italic text-rose-800'>Libraries &#38; Frameworks</span> &#125;</h4>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          Express.js
        </p>
              
        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          jQuery
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
            Bootstrap
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          Tailwind
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-200 shadow-md rounded-xl w-1/6 float-left'>
          Django
        </p>

      </div>
    </div>
    </div>

          

   
  )
}

export default About