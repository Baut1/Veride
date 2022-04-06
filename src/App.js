import "./App.css";
import { Route, Routes } from "react-router-dom";

import InicioSesion from "./componentes/paginas/registro-InicioSesion/contenedor/InicioSesion";
import VerificarCuentaUsuario from "./componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta-Usuario";
import VerificarCuentaNuevoUsuario from "./componentes/paginas/registro-InicioSesion/contenedor/VerificarCuenta-NuevoUsuario";
import RecuperarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/RecuperarContrasena";
import CambiarContrasena from "./componentes/paginas/registro-InicioSesion/contenedor/CambiarContrasena";
import SobreVerede from "./componentes/paginas/sobreVerede/SobreVerede";
import CarritoCompras from "./componentes/paginas/carritoCompras/CarritoCompras";
import Home from "./componentes/paginas/home/Home";
import CuentaUser from "./componentes/paginas/configuracionCuenta/contenedores/CuentaUser";
import DireccionUser from "./componentes/paginas/configuracionCuenta/contenedores/DireccionUser";
import MetodoPagoUser from "./componentes/paginas/configuracionCuenta/contenedores/MetodoPagoUser";

function App() {
  //const { data, setData } = useContext(AppContext);

  return (
    <div className="App">
      <Routes>
        <Route path="/Carrito-Compras" element={<CarritoCompras/> } />
        <Route path="/Configuracion-Cuenta/Metodo-Pago" element={<MetodoPagoUser/> } />
        <Route path="/Configuracion-Cuenta/Direccion" element={<DireccionUser/> } />
        <Route path="/Configuracion-Cuenta/Personal" element={<CuentaUser/> } />
        <Route path="/Cambiar-Contrasena" element={<CambiarContrasena/>} />
        <Route path="/Recuperar-Contrasena" element={<RecuperarContrasena />} />
        <Route path="/Verificar-Cuenta" element={<VerificarCuentaUsuario />} />
        <Route path="/Verificar-Cuenta/Nuevo-Usuario" element={<VerificarCuentaNuevoUsuario />} />
        <Route path="/Inicio-Sesion" element={<InicioSesion />} />
        <Route path="/Sobre-Verede" element={<SobreVerede/> } />
        <Route path="/" element={<Home />} />
      </Routes> 
    </div>
  );
}

export default App;
