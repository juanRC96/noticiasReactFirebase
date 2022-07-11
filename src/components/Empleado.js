import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

function Empleado(props) {
  return (
    <Card style={{ width: "18rem"}}>
      <Card.Img variant="top" src={props.urlImagen}/>
      <Card.Body>
        <Card.Title>{props.apellido}, {props.nombre}</Card.Title>
        <Card.Text>Cargo: {props.cargo}</Card.Text>
        <Card.Text>Salario: ${parseFloat(props.salario).toLocaleString('es')}</Card.Text>
        <Link to={"/empleados/modificar/" + props.id}><Button>Modificar</Button></Link>
        <Link to={"/empleados/eliminar/" + props.id}><Button variant="danger">Eliminar</Button></Link>
      </Card.Body>
    </Card>
  );
}
export default Empleado;
