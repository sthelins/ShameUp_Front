import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Sobrenos from './paginas/sobrenos/Sobrenos';
import Footer from './componentes/estaticos/footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';



function App() {
  return (
    <Router>
      <Navbar />
        <div style={{minHeight: '100vh'}} >
        <Routes>
          <Route path= '/home' element={<Home />}  />
          <Route path= '/' element={<Login />}  />
          <Route path='/cadastrousuario' element={<CadastroUsuario />} />
          <Route path= '/login' element={<Login />}  />
          <Route path= '/sobre' element={<Sobrenos />}  />
        </Routes>
        </div>
      <Footer />
    </Router>
    
  );
}

export default App;