import React from "react";
import "../contenedores/CarritoCompras.scss";
import "antd/dist/antd.css";
import Vistaprodcarrito from "../../../subComponentes/vistaprodcarrito/Vistaprodcarrito";

function SidebarLateral() {
  return (
    <div className="container-A-carritoCompras">
      <div className="titleContainerLeft">
        <h1>Configuración</h1>
      </div>
      <section className="btnsContainer-Configuration">
        <button id="toDo" className=' boxBtnCarritoCompras' to="/Configuracion-Cuenta">
            <Vistaprodcarrito />
        </button>
        <div className=" btnsContainerCarritoCompras">
            <div>
              <button className="btnCerrarSesion btnLimpiarCarrito" >Limpiar Carrito</button>
            </div>
        </div>
      </section>
      
    </div>
  );
}

export default SidebarLateral;