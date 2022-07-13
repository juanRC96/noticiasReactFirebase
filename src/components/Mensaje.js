import Card from "react-bootstrap/Card";
import {Alert, Button} from "react-bootstrap";
import { deleteMessage } from "../services/ContactoServices";
import { useState } from "react";

function Mensaje(props) {

    const[loading,setLoading] = useState(false)

    const handleDelete = async() =>{
        setLoading(true)
        await deleteMessage(props.id);
        props.setRefresh((old) => old + 1);
        setLoading(false)
    }


  return (
    <>
    {
        loading &&
        <Alert variant="danger">Eliminando...</Alert>
    }
        <Card style={{ width: "100%", marginTop:"1rem", marginBottom:"1rem"}}>
        <Card.Body>
          <Card.Title>De {props.nombre}</Card.Title>
          <Card.Text>Email: {props.email}</Card.Text>
          <Card.Text>Telefono: {props.telefono}</Card.Text>
          <Card.Text>Mensaje: {props.mensaje}</Card.Text>
          <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default Mensaje;