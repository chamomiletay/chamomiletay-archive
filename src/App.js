//---- imports ----
import Header from './components/Header';
// import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects'
import './App.css';
import './components/main.css'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <div className='bg-slate-50'>

      <Header />

      <div className='pb-10'>

        <nav className='font-nanum-gothic text-grape font-semibold text-lg py-6 bg-white border-y-2'>
          <a href='#about' className='hover:underline px-2'>About </a>
            <span className='text-slate-500'>⁃</span>
          <a href='#projects' className='hover:underline px-2'> Dev Projects </a>
            <span className='text-slate-500'>⁃</span>
          <a href='#contact' className='hover:underline px-2'> Contact</a>
        </nav>

      </div>

      <section id='about'>

        <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-slate-500 italic drop-shadow-md'>
        Meet the Developer
        </h3>

        <About />

      </section>

        <div className='m-auto my-10 border-2 border-slate-300 rounded-2xl h-6 w-6 flex items-center justify-center bg-slate-100 animate-pulse'></div>


    {/* Projects */}
    <section id='projects'>

      <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-slate-500 italic drop-shadow-md'>
      Recent Projects
      </h3>

      <Projects />

    </section>

        <div className='m-auto my-10 border-2 border-slate-300 rounded-2xl h-6 w-6 flex items-center justify-center bg-slate-100 animate-pulse'></div>

    <section id='contact'>
      <Contact />
    </section>

    <nav className='font-nanum-gothic text-grape font-semibold text-mg py-6'>
          <a href='#about' className='hover:underline px-2'>Return to Top </a>
        </nav>

      <Footer />

      {/* <div>
        <Routes> */}

          {/* <Route path='/' element={<Home />} /> */}
          {/* <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} /> */}
          
        {/* </Routes>
      </div> */}

      </div>

    </div>
  );
}

export default App;
