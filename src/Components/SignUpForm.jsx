import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BotonRegister from "./BotonRegister";
import "../Styles/Register.css";
import axios from "axios";
const SignUpForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailU, setEmailU] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const API_REGISTRARSE = "http://89.116.25.43:3500/api/usuarios/registrar";
  const navigate = useNavigate();

  const registarse = async (e) => {
    e.preventDefault();
    console.log("Nombre:", name);
    console.log("Apellido:", lastName);
    console.log("Correo:", emailU);
    console.log("Usuario:", user);
    console.log("Password:", password);

    const data = {
      nombres: name,
      apellidos: lastName,
      email: emailU,
      usuario: user,
      password: password,
    };

    await axios
      .post(API_REGISTRARSE, data)
      .then((resp) => {
        console.log(resp);
        Swal.fire("Informacion!", "Te has registrado exitosamente", "success");
        navigate("/");
      })
      .catch((error) => {
        if (error.response.status === 400) {
          Swal.fire("Informacion!", error.response.data.message, "error");
        } else if (error.response.status === 404) {
          Swal.fire("Informacion!", error.response.data.message, "error");
        } else {
          Swal.fire("Informacion!", "Ocurrio un error", "error");
        }
      });
  };

  return (
    <main className="main-signup">
      <div className="contenedor-signup">
        <section className="form-container-signup">
          <form className="form-signup">
            <h1>Registrarse</h1>
            <div className="">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Nombres"
              />
              <input
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                type="text"
                placeholder="Apellidos"
              />
              <input
                onChange={(e) => {
                  setEmailU(e.target.value);
                }}
                type="email"
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                type="text"
                placeholder="Usuario"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Contraseña"
              />
            </div>
            <BotonRegister fnRegistrarse={registarse} label={"Registrarse"} />
          </form>
        </section>
      </div>
    </main>
  );
};

export default SignUpForm;
