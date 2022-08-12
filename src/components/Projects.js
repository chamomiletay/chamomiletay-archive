import React from 'react'
import capsule1 from './images/capsule.gif'
import petwork1 from './images/petwork.gif'
import reactIcon from './images/react.svg'
import pythonIcon from './images/python.svg'
import djangoIcon from './images/django.svg'
import tailwindIcon from './images/tailwind-css.svg'
import javascriptIcon from './images/javascript.svg'
import mongoIcon from './images/mongodb.svg'
import toasty1 from './images/toasty.gif'
import nodejsIcon from './images/nodejs.png'
import chlorophyll from './images/chlorophyll.gif'
import htmlIcon from './images/html.svg'
import cssIcon from './images/css3.svg'

const Projects = () => {
  return (
    <div className='px-40 font-nanum-gothic'>

      <div className='p-10 m-auto flex-auto items-center justify-center bg-mint shadow-lg rounded-xl'>

        {/* capsule project */}
        <div>
          <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Capsule</span> &#125;</h3>
              <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-400 drop-shadow-sm'>

                <a href='https://github.com/chamomiletay/capsule-frontend' target='_blank' rel='noopener noreferrer'>Frontend Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://github.com/chamomiletay/capsule-backend' target='_blank' rel='noopener noreferrer'>Backend Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://tubular-begonia-a87560.netlify.app/' target='_blank' rel='noopener noreferrer'>Deployed App</a>
                </p>

          <div className='inline-block m-auto pb-4'>
            <img src={capsule1} alt='Capsule project screenshot' className='h-96 rounded-xl drop-shadow-md'></img>
          </div>

          <p className='px-8 py-2 text-teal-600 italic'>
                " The app that cuts your routine in half and promotes sustainability by generating new outfits based on your closet! "
          </p>
          
            <img src={reactIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            <img src={djangoIcon} alt='ReactJS logo' className='h-14 inline-block px-2 my-4'></img>
            <img src={pythonIcon} alt='ReactJS logo' className='h-14 inline-block px-2 my-4'></img>
            <img src={tailwindIcon} alt='ReactJS logo' className='h-14 inline-block px-2 my-4'></img>
            <img src={javascriptIcon} alt='ReactJS logo' className='h-14 inline-block px-2 my-4'></img>
          
        </div>
      </div>


      {/* petwork project */}
      <div className='font-nanum-gothic'>

      <div className='my-10 m-auto flex-auto items-center justify-center bg-plum shadow-lg rounded-xl'>
        <div className='pb-14'>
          <h3 className='pt-14 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Petwork</span> &#125;</h3>
              <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-400 drop-shadow-sm'>
                <a href='https://github.com/chamomiletay/petworkfrontend' target='_blank' rel='noopener noreferrer'>Frontend Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://github.com/chamomiletay/petworkbackend' target='_blank' rel='noopener noreferrer'>Backend Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://cheery-salmiakki-f8289b.netlify.app/' target='_blank' rel='noopener noreferrer'>Deployed App</a>
                </p>

          <div className='inline-block m-auto pb-4'>
            <img src={petwork1} alt='Capsule project screenshot' className='h-96 rounded-xl drop-shadow-md'></img>
          </div>

          <p className='px-8 pb-8 py-2 text-teal-600 italic'>
                " The pet (dog) parent networking app where users can create profiles to share information about their dogs, look up basic information about different dog breeds, and "love" their favorite breeds to save for later! "
          </p>
          
            <img src={reactIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            <img src={javascriptIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            <img src={mongoIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            <img src={nodejsIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            <img src={htmlIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
              <img src={cssIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            
          
        </div>
        </div>
        </div>

      {/* toasty project */}
      <div className='font-nanum-gothic'>

      <div className='my-10 m-auto flex-auto items-center justify-center bg-mint shadow-lg rounded-xl'>
        <div className='pb-14'>
          <h3 className='pt-14 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Toasty</span> &#125;</h3>
              <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-400 drop-shadow-sm'>
                <a href='https://github.com/chamomiletay/toasty-app' target='_blank' rel='noopener noreferrer'>Github Repo</a>
                <span className='text-orange-100'> | </span>
                <a href='https://toaasty-app.herokuapp.com/journal/index' target='_blank' rel='noopener noreferrer'>Deployed App</a>
                </p>

          <div className='inline-block m-auto pb-4'>
            <img src={toasty1} alt='Capsule project screenshot' className='h-96 rounded-xl drop-shadow-md'></img>
          </div>

          <p className='px-8 pb-8 py-2 text-teal-600 italic'>
                " Record your days and track your mood all in one place. Toasty is intended to cultivate a cozy environment for journaling and keeping record of your day. "
          </p>
          
            <img src={nodejsIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            <img src={javascriptIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            <img src={mongoIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
            
          
        </div>
        </div>
        </div>

        {/* chlorophyll project */}
        <div className='font-nanum-gothic'>

        <div className='my-10 m-auto flex-auto items-center justify-center bg-plum shadow-lg rounded-xl'>
          <div className='pb-14'>
            <h3 className='pt-14 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-white italic drop-shadow-md'>Chlorophyll</span> &#125;</h3>
                <p className='pb-4 text-lg font-m-plus-rounded font-semibold text-slate-400 drop-shadow-sm'>
                  <a href='https://github.com/chamomiletay/chlorophyll' target='_blank' rel='noopener noreferrer'>Github Repo</a>
                  <span className='text-orange-100'> | </span>
                  <a href='https://chamomiletay.github.io/chlorophyll/' target='_blank' rel='noopener noreferrer'>Deployed App</a>
                  </p>

            <div className='inline-block m-auto pb-4'>
              <img src={chlorophyll} alt='Capsule project screenshot' className='h-96 rounded-xl drop-shadow-md'></img>
            </div>

            <p className='px-8 pb-8 py-2 text-teal-600 italic'>
                  " Have you ever wanted to grow your own plant, but lack a green thumb? Look no further than this virtual plant simulator. Grow your own plant --- if you can solve some puzzles! "
            </p>
            
              <img src={htmlIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
              <img src={cssIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>
              <img src={javascriptIcon} alt='ReactJS logo' className='h-14 inline-block px-2'></img>

            
          </div>
          </div>
          </div>
      </div>

  )
}

export default Projects