//---- imports ----
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
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

      <About />

        <div className='m-auto my-10 border-2 border-slate-300 rounded-2xl h-6 w-6 flex items-center justify-center bg-slate-100 animate-pulse'></div>

      <Projects />

        <div className='m-auto my-10 border-2 border-slate-300 rounded-2xl h-6 w-6 flex items-center justify-center bg-slate-100 animate-pulse'></div>

      <Contact />
      
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
