import { Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import {
  deleteImageNew,
  deleteNew,
  getByIdNews,
} from "../services/NoticiasServices";

function Noticia(props) {
  const handleDelete = async () => {
    try {
      const response = await getByIdNews(props.id);
      const url = response.data().urlImagen;
      await deleteImageNew(url);
      await deleteNew(props.id);
      props.setRefresh((old) => old + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Consumer>
      {(context) => (
        <div
          className="carta"
          style={{
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            marginUp: "1rem",
            marginBottom: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            display: "inline-block",
            backgroundColor: "white",
            maxWidth: "45%",
            minWidth: "20rem",
            borderRadius: "10px"
          }}
        >
          <p style={{ display: "inline-block" }}>{props.categoria}</p>
          <p
            style={{
              float: "right",
              display: "inline-block",
              fontStyle: "italic",
            }}
          >
            {props.fecha}
          </p>
          <Link
            to={"/noticias/detalle/" + props.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2 style={{ textAlign: "center" }}>{props.titulo}</h2>
          </Link>
          {props.urlImagen !== "" && (
            <Link
              to={"/noticias/detalle/" + props.id}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <img
                variant="top"
                src={props.urlImagen}
                alt=""
                style={{
                  width: "80%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginUp: "1rem",
                  marginBottom: "1rem",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
            </Link>
          )}
          <Link
            to={"/noticias/detalle/" + props.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 style={{ textAlign: "center" }}>{props.subtitulo}</h5>
          </Link>

          {context.userLogin && (
            <div style={{textAlign:"center"}}>
              <Link to={"/noticias/modificar/" + props.id}>
                <Button>Modificar</Button>
              </Link>
              <Button variant="danger" onClick={handleDelete}>
                Eliminar
              </Button>
            </div>
          )}
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default Noticia;
