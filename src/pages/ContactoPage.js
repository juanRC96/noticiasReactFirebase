import React, { useState } from "react";
import {Button, Form} from "react-bootstrap";

const ContactoPage = () => {

  const [alert,setAlert] = useState({variant:"",text:""})
  const [form,setForm] = useState({nombre:"",email:"",telefono:"",mensaje:""})

  const handleClick = (event) =>{
    event.preventDefault();
  }

  const handleChange = (event) => {

  }


  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rápido</h2>

        <Form className="formulario">

      <Form.Group className="linea">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name="nombre" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="linea">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="linea">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="number" name="telefono" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="linea">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="mensaje"
            onChange={handleChange}
          />
        </Form.Group>

      <Button variant="dark" type="submit">
        Enviar
      </Button>
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
