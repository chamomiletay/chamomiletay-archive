//---- imports ----
import React from 'react'
import resume from './resources/Lee_Taylor_Resume.pdf'

const Contact = () => {
  return (
    <div className='px-32 pb-20 font-roboto text-lg italic font-bold text-white'>

    <div className='p-10 m-auto flex-auto items-center justify-center bg-dusty-blue shadow-lg rounded-xl'>

      {/* <div className='inline-block m-auto pb-4'>
        <img alt='profile' src={tayIcon} className='h-72 drop-shadow-md'></img>
      </div> */}


      <div>

        <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Interested in collabing?</span> &#125;</h3>
            
        <p className='px-8 pt-2 pb-6 text-teal-800'>
            Let's connect! I look forward to being in touch with you. 
        </p>

        {/* <a href='https://www.linkedin.com/in/tay-lee/' target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt='LinkedIn logo'></img>
        </a> */}
        
        <div className='pb-8 px-4 m-auto font-space-mono text-sm font-semibold text-sky-900 items-center justify-center flex-auto'>

            
            <a href='https://www.linkedin.com/in/tay-lee/' target='_blank' rel='noopener noreferrer'>
                <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 inline-block hover:bg-white'>
            LinkedIn
                </p>
            </a>


            <a href='https://github.com/chamomiletay' target='_blank' rel='noopener noreferrer'>
                <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 inline-block hover:bg-white'>
                Github
                </p>
            </a>

            <a href={resume} download='Lee, Taylor- Resume' target='_blank' rel='noopener noreferrer'>
                <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 inline-block hover:bg-white'>
                Resume
                </p>
            </a>

            <p className='pt-10 text-teal-800 font-roboto text-lg'>Send me an email!
              <br/> 
              <span className='font-space-mono text-sky-700'>chamomile.tay@gmail.com</span>
            </p>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact