import React from "react";
import BotonLogin from "./BotonLogin";
import BotonRegister from "./BotonRegister";

function SignInForm() {
  return (
    <main>
      <div className="container">
        <section className="form-container">
          <form className="form-signin">
            <h1>Iniciar Sesión</h1>
            <div className="my-14 mx-0">
              <input type="text" placeholder="Usuario" />
              <input type="password" placeholder="Contraseña" />
            </div>
            <BotonLogin label={"Iniciar Sesión"} />
          </form>
          <div className="mensajeBienvenida">
            <h2>¡Bienvenido a la mejor panadería de tu ciudad!</h2>
            <BotonRegister label={"Registrarse"} />
          </div>
        </section>
      </div>
    </main>
  );
}

export default SignInForm;
