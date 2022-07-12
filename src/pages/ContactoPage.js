import React, { useState } from "react";
import {Form} from "react-bootstrap";
import Alerts from "../components/Alerts";

const ContactoPage = () => {

  const [alert,setAlert] = useState({variant:"",text:""})
  const [form,setForm] = useState({nombre:"",email:"",telefono:"",mensaje:""})

  const handleClick = (event) =>{
    event.preventDefault();
    setAlert({variant:"primary",text:"Datos guardados con exito"})
  }


  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>
        <Form action="" method="" className="formulario" onSubmit={handleClick}>
          <p>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label htmlFor="telefono">Telefono</label>
            <input type="text" name=""></input>
          </p>
          <p>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p className="acciones">
            <input type="submit" value="Enviar" />
          </p>
          <Alerts variant={alert.variant} text={alert.text}/>
        </Form>
      </div>
      <div className="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>
          Tambien puede contactarse con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Telefono: 43242354</li>
          <li>Email: tecnonews@mail.com</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactoPage;
