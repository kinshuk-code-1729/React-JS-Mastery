import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageNotFound from './Components/Pages/PageNotFound';
import AddUser from './Components/User/AddUser';
// import AddUserNew from './Components/User/AddUserNew';
import EditUser from './Components/User/EditUser';
import ViewUser from './Components/User/ViewUser';

function App() {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/About" element={<About />}/>
        <Route exact path="/Contact" element={<Contact />}/>
        <Route exact path="/Users/Add" element={<AddUser />}/>
        <Route exact path="/Users/Edit/:userId" element={<EditUser />}/>
        <Route exact path="/Users/View/:userId" element={<ViewUser />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
