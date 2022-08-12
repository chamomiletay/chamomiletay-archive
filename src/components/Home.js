import React from 'react'

const Home = () => {
  return (
    <div className='px-20 font-nanum-gothic'>

      <div className='p-10 m-auto flex-auto items-center justify-center bg-mint shadow-lg rounded-xl'>

        <div className='inline-block m-auto pb-4'>
          
        </div>


        <div>

          <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Hello!</span> &#125;</h3>
              {/* <p className='pb-4 text-lg font-m-plus-rounded font-semibold italic text-slate-400'>湖にちわ。</p> */}
          <p className='px-14 py-2 text-teal-600'>
                " I'm a detail-oriented front-end engineer and designer that is passionate about cozy aesthetics. I take pride in quickly adapting to new environments, engaging in storytelling, and ideating warm and inviting interactive spaces while engaging my audience. My drive to curate more inclusive and accessible spaces is evident in every application I build. "
          </p>

          <a href='https://www.linkedin.com/in/tay-lee/' target="_blank" rel="noopener noreferrer">
            
          </a>
          
        </div>
      </div>

    </div>
  )
}

export default Home