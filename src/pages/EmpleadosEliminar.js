import { useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteEmp, deleteImageEmp, getByIdEmp } from "../services/EmpleadosServices";

function EmpleadosEliminar() {
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getByIdEmp(id);
        const url = response.data().urlImagen;
        deleteImageEmp(url);
        deleteEmp(id);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  });

  return (
    <div className="eliminar">
      <h4 style={{color:"red"}}>Empleado borrado</h4>
      <Button as={Link} to="/empleados">Volver</Button>
    </div>
    
  );
}
export default EmpleadosEliminar;
