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
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "1%",
            maxWidth: "30%",
            minWidth: "22rem",
            height:"100%"
          }}
        >
          {
            context.userLogin &&
            <>
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
            </>
          }

          {props.urlImagen !== "" && (
            <Link className="imagen-noticia"
              to={"/noticias/detalle/" + props.id}
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <img
                variant="top"
                src={props.urlImagen}
                alt=""
                style={{
                  width: "100%",
                  height:"18rem",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "0.2rem",
                  marginBottom: "0.2rem",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
              />
            </Link>
          )}

          <Link className="titulo"
            to={"/noticias/detalle/" + props.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h4 style={{ textAlign: "center" }}>{props.titulo}</h4>
          </Link>

          {context.userLogin && (
            <>
              <Link to={"/noticias/detalle/" + props.id} style={{ textDecoration: "none", color: "black" }}>
                <h5 style={{ textAlign: "center" }}>{props.subtitulo}</h5>
              </Link>
            <div style={{textAlign:"center"}}>
              <Link to={"/noticias/modificar/" + props.id}>
                <Button>Modificar</Button>
              </Link>
              <Button variant="danger" onClick={handleDelete}>
                Eliminar
              </Button>
            </div>
            </>
          )}
        </div>
      )}
    </AuthContext.Consumer>
  );
}

export default Noticia;
