import {React, useState}  from "react";
import "./CarritoCompras.scss";
import "antd/dist/antd.css";
import NavBarHome from "../../../subComponentes/navBar/NavBarHome";
import SidebarLateral from "../componentes/SidebarLateral";
import Footer from "../../../subComponentes/footer/Footer";
import InformacionDeCompra from "../componentes/formularios/InformacionDeCompra";

function ConfiguracionCuenta() {

  return (
    <section className="flex-contenedorConfigCuenta">
      <NavBarHome />
      <div className="contenedorConfigCuenta flexBox-CG contenedorCarritoCompras">
        <SidebarLateral />
        <InformacionDeCompra />
      </div>
      <Footer />
    </section>
  );
}

export default ConfiguracionCuenta;