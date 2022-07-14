import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { deleteImageNew, deleteNew, getByIdNews } from "../services/NoticiasServices";

function Noticia(props) {

  const handleDelete = async() => {
    try{
      const response = await getByIdNews(props.id);
      const url = response.data().urlImagen;
      await deleteImageNew(url)
      await deleteNew(props.id)
      props.setRefresh((old) => old + 1)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <AuthContext>
      {
        context => (
          <Col style={{marginUp: "1rem", marginBottom:"1rem"}}>
          <Card style={{ height:"100%", width: "100%", marginLeft: "auto", marginRight: "auto", minWidth:"25rem", maxWidth:"60rem"}}>
          <Card.Body>

          <Card.Text style={{display:"inline-block"}}>{props.categoria}</Card.Text>
          <Card.Text style={{float:"right", display:"inline-block", fontStyle:"italic"}}>{props.fecha}</Card.Text>
            <Link to={"/noticias/detalle/"+props.id} style={{textDecoration: 'none',color:'black'}}><Card.Title style={{textAlign:"center"}}><h3>{props.titulo}</h3></Card.Title></Link>
            {
              props.urlImagen !=="" &&
              <Link to={"/noticias/detalle/"+props.id}><Card.Img variant="top" src={props.urlImagen} style={{height: "25rem", width: "100%", marginUp:"1rem", marginBottom:"1rem", borderRadius:"5px", objectFit:"cover" }}/></Link>
            }
            <Link to={"/noticias/detalle/"+props.id} style={{textDecoration: 'none',color:'black'}}><Card.Subtitle style={{textAlign:"center"}}><h5>{props.subtitulo}</h5></Card.Subtitle></Link>
            
            {
              context.userLogin &&
              <>
              <Link to={"/noticias/modificar/" + props.id}><Button>Modificar</Button></Link>
              <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
              </>
            }
          </Card.Body>
        </Card>
      </Col>
        )
      }
      </AuthContext>
  );
}

export default Noticia;
