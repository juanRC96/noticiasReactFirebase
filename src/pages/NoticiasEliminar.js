import { useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteImageNew, deleteNew, getByIdNews } from "../services/NoticiasServices";

function NoticiasEliminar() {
  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getByIdNews(id);
        const url = response.data().urlImagen;
        deleteImageNew(url);
        deleteNew(id);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  });

  return (
    <div className="eliminar">
      <h4 style={{color:"red"}}>Noticia borrada con exito</h4>
      <Button as={Link} to="/noticias">Volver</Button>
    </div>
    
  );
}
export default NoticiasEliminar;
