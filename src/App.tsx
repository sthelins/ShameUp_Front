import React from "react";
import "./App.css";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Home from "./paginas/home/Home";
import Login from "./paginas/login/Login";
import Sobrenos from "./paginas/sobrenos/Sobrenos";
import Footer from "./componentes/estaticos/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import ListaCategoria from "./componentes/Categoria/listaCategoria/ListaCategoria";
import CadastroCategoria from "./componentes/Categoria/cadastroCategoria/CadastroCategoria";
import DeletarCategoria from "./componentes/Categoria/deletarCategoria/DeletarCategoria";
import CadastroPostagem from "./componentes/postagens/cadastroPostagem/CadastroPostagem";
import ListarPostagem from "./componentes/postagens/listarPostagem/ListarPostagem";
import DeletarPostagem from "./componentes/postagens/deletarPostagem/DeletarPostagem";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/" element={<Login />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobrenos />} />
            <Route path="/postagens" element={<ListarPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPostagem />} />
            <Route
              path="/formularioPostagem/:id"
              element={<CadastroPostagem />}
            />
            <Route
              path="/formularioCategoria"
              element={<CadastroCategoria />}
            />
            <Route
              path="/formularioCategoria/:id"
              element={<CadastroCategoria />}
            />
            <Route
              path="/deletarCategoria/:id"
              element={<DeletarCategoria />}
            />
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
