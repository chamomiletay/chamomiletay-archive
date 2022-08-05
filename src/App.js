//---- imports ----
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom'
import About from './components/About';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <Header />


      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
