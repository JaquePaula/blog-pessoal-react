import Navbar from "./componentes/navBar/NavBar";
import Footer from "./componentes/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import Home from "./paginas/home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import ListaTemas from "./componentes/temas/listaTemas/ListaTemas";
import FormularioTema from "./componentes/temas/formularioTemas/FormularioTemas";
import DeletarTema from "./componentes/temas/deletarTema/DeletarTema";
import ListaPostagens from "./componentes/postagens/listaPostagem/ListaPostagem";
import FormularioPostagem from "./componentes/postagens/formularioPostagem/FormularioPostagem";
import DeletarPostagem from "./componentes/postagens/deletarPostagem/DeletarPostagem";
import Perfil from "./paginas/perfil/Perfil";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';




function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[79vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route
                path="/cadastroPostagem"
                element={<FormularioPostagem />}
              />
              <Route
                path="/editarPostagem/:id"
                element={<FormularioPostagem />}
              />
              <Route
                path="/deletarPostagem/:id"
                element={<DeletarPostagem />}
              />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
