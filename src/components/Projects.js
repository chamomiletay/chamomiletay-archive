//---- imports ----
import React from 'react'
import capsule1 from './images/capsule.gif'
import petwork1 from './images/petwork.gif'
import toasty1 from './images/toasty.gif'
import chlorophyll from './images/chlorophyll.gif'


const Projects = () => {
  return (
    <div className='px-40 font-nanum-gothic'>

      <div className='p-10 m-auto flex-auto items-center justify-center bg-mint shadow-lg rounded-xl'>

        {/* capsule project */}
        <div>
          <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Capsule</span> &#125;</h3>
              <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-500 drop-shadow-sm'>

                <a href='https://github.com/chamomiletay/capsule-frontend' target='_blank' rel='noopener noreferrer' className='hover:underline'>Frontend Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://github.com/chamomiletay/capsule-backend' target='_blank' rel='noopener noreferrer' className='hover:underline'>Backend Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://tubular-begonia-a87560.netlify.app/' target='_blank' rel='noopener noreferrer' className='hover:underline'>Deployed App</a>
                </p>

          <div className='inline-block m-auto pb-4'>
            <img src={capsule1} alt='Capsule project screenshot' className='h-96 rounded-xl drop-shadow-md'></img>
          </div>

          <p className='px-8 py-2 pb-6 text-teal-800 italic'>
          A responsive wardrobe-logging application that assists users in building outfits and promoting sustainability by using existing pieces in their closet.
          </p>

            <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-500 drop-shadow-sm'>Technologies Used</p>

            <i class="devicon-react-original-wordmark"></i>
            <i class="devicon-django-plain colored"></i>
            <i class="devicon-python-plain-wordmark"></i>
            <i class="devicon-tailwindcss-plain"></i>
            <i class="devicon-javascript-plain"></i>
          
        </div>
      </div>


      {/* petwork project */}
      <div className='font-nanum-gothic'>

      <div className='my-10 m-auto flex-auto items-center justify-center bg-plum shadow-lg rounded-xl'>
        <div className='pb-14'>
          <h3 className='pt-14 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Petwork</span> &#125;</h3>
              <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-500 drop-shadow-sm'>
                <a href='https://github.com/chamomiletay/petworkfrontend' target='_blank' rel='noopener noreferrer' className='hover:underline hover:text-white'>Frontend Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://github.com/chamomiletay/petworkbackend' target='_blank' rel='noopener noreferrer' className='hover:underline hover:text-white'>Backend Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://cheery-salmiakki-f8289b.netlify.app/' target='_blank' rel='noopener noreferrer' className='hover:underline hover:text-white'>Deployed App</a>
                </p>

          <div className='inline-block m-auto pb-4'>
            <img src={petwork1} alt='Capsule project screenshot' className='h-96 rounded-xl drop-shadow-md'></img>
          </div>

          <p className='px-8 pb-8 py-2 text-sky-900 italic'>
          A pet-parent networking site where users can find breed-specific care information and generate profiles for their furry friends.
          </p>
          
          <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-500 drop-shadow-sm'>Technologies Used</p>

            <i class="devicon-react-original-wordmark"></i>

            <i class="devicon-javascript-plain"></i>

            <i class="devicon-mongodb-plain-wordmark"></i>

            <i class="devicon-nodejs-plain"></i>

            <i class="devicon-html5-plain-wordmark"></i>

            <i class="devicon-css3-plain-wordmark"></i>
          
          
        </div>
        </div>
        </div>

      {/* toasty project */}
      <div className='font-nanum-gothic'>

      <div className='my-10 m-auto flex-auto items-center justify-center bg-mint shadow-lg rounded-xl'>
        <div className='pb-14'>
          <h3 className='pt-14 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Toasty</span> &#125;</h3>
              <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-400 drop-shadow-sm'>
                <a href='https://github.com/chamomiletay/toasty-app' target='_blank' rel='noopener noreferrer' className='hover:underline'>Github Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://toaasty-app.herokuapp.com/journal/index' target='_blank' rel='noopener noreferrer' className='hover:underline'>Deployed App</a>
                </p>

          <div className='inline-block m-auto pb-4'>
            <img src={toasty1} alt='Capsule project screenshot' className='h-96 rounded-xl drop-shadow-md'></img>
          </div>

          <p className='px-8 pb-8 py-2 text-teal-800 italic text-semibold'>
                Record your days and track your mood all in one place. Toasty is intended to cultivate a cozy environment for journaling and keeping record of your day.
          </p>
          
          <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-400 drop-shadow-sm'>Technologies Used</p>

            <i class="devicon-nodejs-plain"></i>
            <i class="devicon-javascript-plain"></i>
            <i class="devicon-mongodb-plain-wordmark"></i>
            
        </div>
        </div>
        </div>

        {/* chlorophyll project */}
        <div className='font-nanum-gothic'>

        <div className='my-10 m-auto flex-auto items-center justify-center bg-plum shadow-lg rounded-xl'>
          <div className='pb-14'>
            <h3 className='pt-14 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Chlorophyll</span> &#125;</h3>
                <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-500 drop-shadow-sm'>
                  <a href='https://github.com/chamomiletay/chlorophyll' target='_blank' rel='noopener noreferrer' className='hover:underline hover:text-white'>Github Repo</a>
                  <span className='text-orange-100'> | </span>
                  <a href='https://chamomiletay.github.io/chlorophyll/' target='_blank' rel='noopener noreferrer' className='hover:underline hover:text-white'>Deployed App</a>
                  </p>

            <div className='inline-block m-auto pb-4'>
              <img src={chlorophyll} alt='Capsule project screenshot' className='h-96 rounded-xl drop-shadow-md'></img>
            </div>

            <p className='px-8 pb-8 py-2 text-sky-900 italic'>
            An HTML-based virtual plant simulator inspired by the game “Spaceman”, Chlorophyll references its core mechanics and adds additional functionality for responsiveness and accessibility.
            </p>
              <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-500 drop-shadow-sm'>Technologies Used</p>

              <i class="devicon-javascript-plain"></i>
              <i class="devicon-html5-plain-wordmark"></i>
              <i class="devicon-css3-plain-wordmark"></i>

            
          </div>
          </div>
          </div>
      </div>

  )
}

export default Projects