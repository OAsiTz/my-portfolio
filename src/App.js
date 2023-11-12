import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

// Contents
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

import { BrowserRouter as Router,Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      <Routes>
        <Route exact path='/education' element={<Education/>}/>
      </Routes>
      <Routes>
        <Route exact path='/skills' element={<Skills/>}/>
      </Routes>
      <Routes>
        <Route exact path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
