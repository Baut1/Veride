import React, { useState } from "react";

import "./VPC.css";

import imagen from "../imagenes/img.svg";
import plus from "../imagenes/plus.svg";
import minus from "../imagenes/minus.svg";
import down from "../imagenes/down.svg";
import clock from "../imagenes/clock.svg";
import burger from "../imagenes/burger.svg";
import pizza from "../imagenes/pizza.svg";
import axios from "axios";

export default function VPC({ products, id }) {
  const [isPM, setIsPM] = useState(products.count || 0);
  const buttonMinus = () => {
    //setIsMinus(current => !current)
    setIsPM((current) => (current === 0 ? 0 : current - 1));
    axios.post(`https://country-app-v3.herokuapp.com/orders/${id}/minus`, {
      count: isPM,
      product_id: products.id,
    });
  };

  const buttonPlus = () => {
    setIsPM((current) => current + 1);
    axios.post(`https://country-app-v3.herokuapp.com/orders/${id}/aument`, {
      count: isPM,
      product_id: products.id,
    });
  };

  const [isImg, setIsImg] = useState(false);
  const buttonImg = () => {
    setIsImg((current) => !current);
  };

  const handleDelete = () => {
    axios.delete(`https://country-app-v3.herokuapp.com/orders/${id}`);
  };

  const handleView = () => {
    window.location.pathname = `/Carrito-Compras/${id}`;

    axios.get(`https://country-app-v3.herokuapp.com/orders/view/${id}`).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className="contenedorVPC">
      <div className="contenedorImagen">
        <img src={imagen} alt="imagen" onClick={buttonImg} />
        <h3 className={`postexto ${isImg ? "hidden" : ""}`}>AGOTADO</h3>
      </div>

      <div>
        <p className="equis" style={{ padding: "10px" }} onClick={handleDelete}>
          X
        </p>
        <div className="contenedorTexto" onClick={handleView}>
          <div className="flex1">
            <div>
              <h1>{products.name}</h1>
            </div>
            <div className="flex1">
              <img className="iconclock" src={clock} alt="clock" />
              <h2>{products.time_preparation}</h2>
            </div>
          </div>

          <p>{products.description}</p>

          <div className="flex4">
            <h5>Read more</h5>
            <img className="icondown" src={down} alt="down" />
          </div>

          <div className="flex2">
            <div className="flex3">
              <img className="icon" src={burger} alt="burger" />
              <h4>Burger</h4>
            </div>
            <div className="flex3">
              <img className="icon" src={pizza} alt="pizza" />
              <h4>Pizza</h4>
            </div>
          </div>

          <div className="contenedorPM">
            <div className="flex1">
              <h6>$ {products.price}</h6>
              <div className="flex2">
                <img
                  className="iconpm"
                  src={minus}
                  alt="minus"
                  onClick={buttonMinus}
                />
                <h1 className="textopm"> {isPM} </h1>
                <img
                  className="iconpm"
                  src={plus}
                  alt="plus"
                  onClick={buttonPlus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
