//---- imports ----
import React from 'react'
import tayIcon from './images/test.png'
import './main.css'

const About = () => {


  return (
    <div className='px-32 font-roboto text-lg italic font-bold text-white'>

      <div className='p-10 m-auto flex-auto items-center justify-center bg-bread shadow-lg rounded-xl'>

        <div className='inline-block m-auto pb-4'>
          <img alt='profile' src={tayIcon} className='h-72 drop-shadow-md'></img>
        </div>


        <div>

          <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Hello!</span> &#125;</h3>
              {/* <p className='pb-4 text-lg font-m-plus-rounded font-semibold italic text-slate-400'>湖にちわ。</p> */}
          <p className='px-8 py-2 text-white font-semibold drop-shadow-md font-'>
                My name is Taylor, and I am passionate about storytelling. As a detail-oriented front-end engineer and designer, I truly enjoy curating responsive, efficient, and cozy spaces. My toolkit includes <span className='font-roboto text-strawberry underline'>Javascript, ReactJS, Tailwind CSS,</span> and other libraries and frameworks.
                <br/> 
                <br/> 
                I take pride in quickly adapting to new environments, engaging in storytelling, and ideating warm and inviting interactive spaces while engaging my audience. My drive to curate more inclusive and accessible spaces is evident in every application I build.
          </p>

          {/* <a href='https://www.linkedin.com/in/tay-lee/' target="_blank" rel="noopener noreferrer">
            <img src={linkedInLogo} alt='LinkedIn logo'></img>
          </a> */}
          
        </div>
      </div>

      {/* My coding languages */}

    <div className='p-6 m-auto mt-8 flex-auto items-center justify-center  bg-dusty-blue shadow-lg rounded-xl'>

      <div className='pb-8 px-4 mx-6 font-space-mono text-sm font-semibold text-sky-900'>

        <h4 className='pb-12 pt-4 text-xl font-semibold font-space-mono text-orange-100'>&#123; <span className='text-white italic drop-shadow-md'>Programming Languages</span> &#125;</h4>

        
        <i class="devicon-nodejs-plain"></i>

        {/* tooltip! - js */}
          <div className='relative block'>
            <span className='absolute z-0 transition-opacity duration-150 opacity-0 hover:opacity-100  text-xs rounded-xl py-2 px-2 bg-slate-200 text-center'>Javascript</span>
          </div>
       
        <i class="devicon-react-original-wordmark"></i>
        
        <i class="devicon-python-plain-wordmark"></i>
        
        <i class="devicon-javascript-plain"></i>
        
        <i class="devicon-html5-plain-wordmark"></i>
        
        <i class="devicon-css3-plain-wordmark"></i>


      </div>


      {/* Libraries & frameworks */}
            
      <div className='pt-2 pb-8  px-4 m-4 font-space-mono text-sm font-semibold text-sky-900'>

        <h4 className='pb-6 text-xl font-semibold font-space-mono text-rose-400'>&#123; <span className='text-white italic drop-shadow-md'>Libraries &#38; Frameworks</span> &#125;</h4>
        
 
        <i class="devicon-express-original"></i>
          
        <i class="devicon-jquery-plain-wordmark"></i>

        <i class="devicon-django-plain colored"></i>

        <i class="devicon-bootstrap-plain-wordmark"></i>

        <i class="devicon-tailwindcss-plain"></i>


      </div>

      {/* Databases */}
            
      <div className='pt-2 pb-8  px-4 m-4 font-space-mono text-sm font-semibold text-sky-900'>

        <h4 className='pb-6 text-xl font-semibold font-space-mono text-orange-100'>&#123; <span className='text-white italic drop-shadow-md'>Databases</span> &#125;</h4>
        

        <i class="devicon-mongodb-plain-wordmark"></i>
        
        <i class="devicon-postgresql-plain-wordmark"></i>
          

      </div>
     
    </div>
    </div>

          

   
  )
}

export default About