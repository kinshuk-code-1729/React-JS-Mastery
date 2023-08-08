import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Components/Pages/Home';
import AboutUS from './Components/Pages/AboutUS';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Contact/>
      <AboutUS/>
    </div>
  );
}

export default App;
