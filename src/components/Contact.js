import React from 'react'

const Contact = () => {
  return (
    <div className='px-32 pb-20 font-roboto text-lg italic font-bold text-white'>

    <div className='p-10 m-auto flex-auto items-center justify-center bg-mint shadow-lg rounded-xl'>

      {/* <div className='inline-block m-auto pb-4'>
        <img alt='profile' src={tayIcon} className='h-72 drop-shadow-md'></img>
      </div> */}


      <div>

        <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Interested in collabing?</span> &#125;</h3>
            {/* <p className='pb-4 text-lg font-m-plus-rounded font-semibold italic text-slate-400'>湖にちわ。</p> */}
        <p className='px-8 py-2 text-teal-600'>
            Let's connect! I look forward to being in touch with you. 
        </p>

        {/* <a href='https://www.linkedin.com/in/tay-lee/' target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt='LinkedIn logo'></img>
        </a> */}
        
        <div className='pb-8 px-4 m-auto font-space-mono text-sm font-semibold text-sky-900 items-center justify-center flex-auto'>

        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 inline-block'>
          LinkedIn
        </p>
        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 inline-block'>
          Email
        </p>
        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 inline-block'>
          Resume
        </p>
        <p className='p-2 mx-2 border-2 border-blue-300 bg-blue-100 shadow-md rounded-xl w-1/6 inline-block'>
          Github
        </p>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact