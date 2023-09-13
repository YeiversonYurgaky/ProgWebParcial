import React, { useState } from "react";
import BotonLogin from "./BotonLogin";
import BotonRegister from "./BotonRegister";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import gatopan from "../assets/gatologin.png";
function SignInForm() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();

  const iniciarSesion = async (e) => {
    e.prevenrDefault();
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contraseña);

    const datosPostman = {
      usuario: usuario,
      password: contraseña,
    };

    await axios
      .post("http://89.116.25.43:3500/api/login", datosPostman)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("token", resp.data.jwt);
        localStorage.setItem("user", resp.data.user);
        localStorage.setItem("username", resp.data.user.usuario);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 404) {
          Swal.fire("Informacion!", error.response.data.message, "error");
        } else {
          Swal.fire("Informacion!", "Ocurrio un error", "error");
        }
      });
  };

  return (
    <main>
      <div className="container">
        <section className="form-container">
          <form className="form-signin">
            <h1>Iniciar Sesión</h1>
            <div className="my-14 mx-0">
              <input
                onChange={(e) => {
                  setUsuario(e.target.value);
                }}
                type="text"
                placeholder="Usuario"
              />
              <input
                onChange={(e) => {
                  setContraseña(e.target.value);
                }}
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <BotonLogin
              fnIniciarSesion={iniciarSesion}
              label={"Iniciar Sesión"}
            />
          </form>
          <div className="mensajeBienvenida">
            <h2>¡Bienvenido a la mejor panadería de tu ciudad!</h2>
            <img className="cambia-modo " src={gatopan} alt="gatopan" />
            <BotonRegister label={"Registrarse"} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignInForm;
