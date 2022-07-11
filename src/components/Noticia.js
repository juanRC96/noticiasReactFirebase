import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Noticia(props) {
  return (
    <AuthContext>
      {
        context => (
          <Col style={{marginUp: "1rem", marginBottom:"1rem"}}>
          <Card style={{ height:"100%", width: "100%", marginLeft: "auto", marginRight: "auto", minWidth:"40rem", maxWidth:"60rem"}}>
          <Card.Body>
            <Card.Title><h3>{props.titulo}</h3></Card.Title>
            {
              props.urlImagen !=="" &&
              <Card.Img variant="top" src={props.urlImagen} style={{height: "25rem", width: "90%", marginUp:"1rem", marginBottom:"1rem", borderRadius:"5px", objectFit:"cover" }}/>
            }
            <Card.Subtitle><h5>{props.subtitulo}</h5></Card.Subtitle>
            <Card.Text>{props.cuerpo}</Card.Text>
            {
              context.userLogin &&
              <>
              <Link to={"/noticias/modificar/" + props.id}><Button>Modificar</Button></Link>
              <Link to={"/noticias/eliminar/" + props.id}><Button variant="danger">Eliminar</Button></Link>
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
