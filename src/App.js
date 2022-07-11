import { BrowserRouter, Routes, Route } from "react-router-dom";
import React,{useState} from "react"

import Header from "./components/layout/Header";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";

import "./App.css"
import NoticiasPage from "./pages/NoticiasPage";
import NoticiasAlta from "./pages/NoticiasAlta";
import NoticiasModificar from "./pages/NoticiasModificar";
import NoticiasEliminar from "./pages/NoticiasEliminar";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import AuthProvider from "./context/AuthProvider";
import AuthContext from "./context/AuthContext";
import Alerts from "./components/Alerts";
import Empleados from "./pages/Empleados";
import EmpleadosAlta from "./pages/EmpleadosAlta";
import EmpleadosEliminar from "./pages/EmpleadosEliminar";
import EmpleadosModificar from "./pages/EmpleadosModificar";
import Balance from "./pages/Balance";

function App() {

  const[login,setLogin] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <AuthProvider>
        <Navigation login={login}/>
        <AuthContext>
          {
            context=>(
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="nosotros" element={<NosotrosPage />} />
                  <Route path="contacto" element={<ContactoPage />} />
                  <Route path="noticias" element={<NoticiasPage/>} />
                {
                  context.userLogin &&
                  <>
                    <Route path="create" element={<Registro/>} />
                    <Route path="balance" element={<Balance/>} />
                    <Route path="empleados" element={<Empleados/>} />
                    <Route path="empleados/alta" element={<EmpleadosAlta/>} />
                    <Route path="empleados/modificar/:id" element={<EmpleadosModificar/>} />
                    <Route path="empleados/eliminar/:id" element={<EmpleadosEliminar/>} />
                    <Route path="noticias/alta" element={<NoticiasAlta/>} />
                    <Route path="noticias/modificar/:id" element={<NoticiasModificar/>} />
                    <Route path="noticias/eliminar/:id" element={<NoticiasEliminar/>} />
                  </>
                }
                {
                  !context.userLogin &&
                  <>
                    <Route path="login" element={<Login setLogin={setLogin}/>} />

                    <Route path="create" element={<Alerts variant="danger" text="Inicie sesión para continuar"/>} />
                    <Route path="noticias/alta" element={<Alerts variant="danger" text="Inicie sesión para continuar"/>} />
                    <Route path="noticias/modificar/:id" element={<Alerts variant="danger" text="Inicie sesión para continuar"/>} />
                    <Route path="noticias/eliminar/:id" element={<Alerts variant="danger" text="Inicie sesión para continuar"/>} />
                  </>
                }
              </Routes>
            )
          }
        </AuthContext>
        </AuthProvider>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
