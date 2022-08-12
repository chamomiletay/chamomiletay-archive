//---- imports ----
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
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

      <nav className='font-nanum-gothic text-slate-500 font-semibold text-md pb-10'>
        <a href='#about' className='hover:underline'>About </a>|
        <a href='#projects' className='hover:underline'> Dev Projects </a>|
        <a href='#contact' className='hover:underline'> Contact</a>
      </nav>

      <section id='about'>
        <About />
      </section>

        <div className='m-auto my-10 border-2 border-slate-300 rounded-2xl h-6 w-6 flex items-center justify-center bg-slate-100 animate-pulse'></div>

    <section id='projects'>
    <h3 className='pt-4 pb-8 text-2xl font-semibold font-space-mono text-orange-100 drop-shadow-md'>&#123; <span className='text-slate-500 italic drop-shadow-md'>Projects</span> &#125;</h3>
      <Projects />
    </section>

        <div className='m-auto my-10 border-2 border-slate-300 rounded-2xl h-6 w-6 flex items-center justify-center bg-slate-100 animate-pulse'></div>

    <section id='contact'>
      <Contact />
    </section>

      <Footer />

      <div>
        <Routes>

          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          
        </Routes>
      </div>

      </div>

    </div>
  );
}

export default App;
