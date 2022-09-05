import React from 'react';
import './App.css';
<<<<<<< HEAD
import Footer from'./componentes/estaticos/footer/Footer'

function App() {
 return (
  <h1> <Footer /> </h1>
 );
=======
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Sobrenos from './paginas/sobrenos/Sobrenos';
import Footer from './componentes/estaticos/footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Navbar />
        <div style={{minHeight: '100vh'}} >
        <Routes>
          <Route path= '/home' element={<Home />}  />
          <Route path= '/' element={<Login />}  />
          <Route path= '/login' element={<Login />}  />
          <Route path= '/sobre' element={<Sobrenos />}  />
        </Routes>
        </div>
      <Footer />
    </Router>
    
  );
>>>>>>> 3746d84e6baf4980a5fe4764f90325bf4b35926a
}

export default App;