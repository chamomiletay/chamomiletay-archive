//---- imports ----
import React from 'react'
import tayIcon from './images/taylor_icon.png'
import linkedInLogo from './images/linkedin-logo.svg'
import htmlIcon from './images/html-icon.png'
import jsIcon from './images/js-icon.png'
import cssIcon from './images/css-icon.png'
import './main.css'


const About = () => {


  return (
    <div className='px-32 font-roboto text-lg italic font-bold text-white'>

      <div className='p-10 m-auto flex-auto items-center justify-center bg-mint shadow-lg rounded-xl'>

        <div className='inline-block m-auto pb-4'>
          <img alt='profile' src={tayIcon} className='h-72 drop-shadow-md'></img>
        </div>


        <div>

          <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Hello!</span> &#125;</h3>
              {/* <p className='pb-4 text-lg font-m-plus-rounded font-semibold italic text-slate-400'>湖にちわ。</p> */}
          <p className='px-8 py-2 text-teal-600'>
                " I'm a detail-oriented front-end engineer and designer that is passionate about cozy aesthetics. I take pride in quickly adapting to new environments, engaging in storytelling, and ideating warm and inviting interactive spaces while engaging my audience. My drive to curate more inclusive and accessible spaces is evident in every application I build. "
          </p>

          {/* <a href='https://www.linkedin.com/in/tay-lee/' target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt='LinkedIn logo'></img>
          </a> */}
          
        </div>
      </div>

      {/* My coding languages */}

    <div className='p-6 m-auto mt-8 flex-auto items-center justify-center  bg-strawberry shadow-lg rounded-xl'>

      <div className='pb-8 px-4 mx-6 font-space-mono text-sm font-semibold text-sky-900'>

        <h4 className='pb-6 text-lg font-semibold font-space-mono text-orange-100'>&#123; <span className='text-white italic drop-shadow-md'>Programming Languages</span> &#125;</h4>
              
        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
          Javascript
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
          Python
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
          HTML
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
          CSS
        </p>

      </div>


      {/* Libraries & frameworks */}
            
      <div className='pt-2 pb-8  px-4 m-4 font-space-mono text-sm font-semibold text-sky-900'>

        <h4 className='pb-6 text-lg font-semibold font-space-mono text-rose-400'>&#123; <span className='text-white italic drop-shadow-md'>Libraries &#38; Frameworks</span> &#125;</h4>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
          Express.js
        </p>
              
        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
          jQuery
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
            Bootstrap
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
          Tailwind
        </p>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 float-left'>
          Django
        </p>

      </div>
    </div>
    </div>

          

   
  )
}

export default About