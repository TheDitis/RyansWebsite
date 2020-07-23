import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Portfolio from "../Portfolio/Portfolio";
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
