import React, { useState } from "react";
import {Alert, Button, Form, Row} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../services/ContactoServices";

const ContactoPage = () => {

  const [form,setForm] = useState({nombre:"",email:"",telefono:"",mensaje:""});
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async(event) =>{
    event.preventDefault();
    setLoading(true)
    try{
      await createMessage(form);
      setLoading(false)
      navigate("/")

    }catch(error){
      console.log(error)
      setLoading(false)
    }
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
    console.log(form)
  };


  return (
    <>
    {
      loading &&
      <Alert variant="primary">Guardando mensaje...</Alert>
    }

    <main className="holder">
      <Row style={{marginTop:"1rem",marginLeft:"auto",marginRight:"auto"}}>
      <div className="contenedor" style={{minWidth:"18rem",maxWidth:"45%",display:"inline-block",marginLeft:"auto",marginRight:"auto",marginTop:"1rem"}}>
      <Form className="formulario">
      <h2>Contacto Rápido</h2>
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

      <Button variant="dark" type="submit" onClick={handleClick}>
        Enviar
      </Button>
    </Form>
    </div>
      <div className="contenedor" style={{minWidth:"18rem",maxWidth:"45%",display:"inline-block",marginLeft:"auto",marginRight:"auto",marginTop:"1rem",padding:"3rem"}}>
        <h2>Otras vias de comunicacion</h2>
        <p>
          Tambien puede contactarse con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Telefono: 43242354</li>
          <li>Email: tecnonews@mail.com</li>
        </ul>
      </div>
      </Row>
    </main>
    </>
  );
};

export default ContactoPage;
