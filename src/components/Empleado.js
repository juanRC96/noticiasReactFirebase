import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import { deleteEmp, deleteImageEmp, getByIdEmp } from "../services/EmpleadosServices";

function Empleado(props) {

  const handleDelete = async() => {
    try{
      const response = await getByIdEmp(props.id);
      const url = response.data().urlImagen;
      await deleteImageEmp(url)
      await deleteEmp(props.id)
      props.setRefresh((old) => old + 1)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <Card style={{ width: "18rem", marginTop:"1rem",marginBottom:"1rem", marginLeft:"auto",marginRight:"auto"}}>
      <Card.Img variant="top" src={props.urlImagen}/>
      <Card.Body>
        <Card.Title>{props.apellido}, {props.nombre}</Card.Title>
        <Card.Text>Cargo: {props.cargo}</Card.Text>
        <Card.Text>Salario: ${parseFloat(props.salario).toLocaleString('es')}</Card.Text>
        <Link to={"/empleados/modificar/" + props.id}><Button>Modificar</Button></Link>
        <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
      </Card.Body>
    </Card>
  );
}
export default Empleado;
