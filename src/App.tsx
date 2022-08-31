import React from 'react';
import './App.css';

import Navbar from './componentes/estaticos/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
 return (
  <>
      <Router> {/* Satélite */}
          <Navbar />
          
      </Router>
          
      </>
 );
}

export default App;
