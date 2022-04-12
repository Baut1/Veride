import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Alert, AlertTitle } from "@material-ui/core";
import "./Formularios.scss";
import Logo from "../../imagenes/Logo3-Largo.png";
import axios from "axios";

function FormVerificarCuentaNuevoUsuario() {
  const [verifyAccount, setVerifyAccount] = useState("");
  const [error, setError] = useState(null);
  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `https://country-app-v3.herokuapp.com/verify_code/${params.id}`,
        JSON.stringify({ code: Number(verifyAccount) })
      )
      .then((data) => {
        window.location.pathname = "/";
        localStorage.setItem("user", data.data.email);
        localStorage.removeItem("confirmation_email");
      })
      .catch((error) => {
        if (error.request) {
          setError(error.request.response);
        }
      });
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      window.location.pathname = "/";
    }
    if (!localStorage.getItem("confirmation_email")) {
      window.location.pathname = "/inicio-sesion";
    }
  }, []);

  return (
    <>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error} — <strong>pruebe de nuevo</strong>
        </Alert>
      )}
      <section className="container">
        <div className="btnVolver">
          <Link to="/Inicio-Sesion">
            <button type="button">
              <i class="uil uil-arrow-left"></i>
            </button>
          </Link>
        </div>
        <div className="logoInicioOtros">
          <img src={Logo} alt="Veridé" />
        </div>
        <form className="centerForm" onSubmit={handleSubmit}>
          <h2>Solo queda un último paso</h2>
          <div className="start">
            <p>
              Introduce el código de 6 dígitos enviado a{" "}
              <strong>{localStorage.getItem("confirmation_email")}</strong>
            </p>
          </div>
          <div className="inputsBoxB">
            <input
              className="inputB"
              required="true"
              type="number"
              placeholder="*"
              onChange={(e) => setVerifyAccount(e.target.value)}
            />
            <div className="btnsIngresarOtros">
              <button type="submit">Verificar Cuenta</button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default FormVerificarCuentaNuevoUsuario;
