//---- imports ----
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects'
import './App.css';
import './components/main.css'

function App() {
  return (
    <div className="App">
    <div className='bg-slate-50'>

      <Header />
      <About />
      <Projects />
      <Contact />

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
