import React, { useEffect, useState } from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Noticia from "../components/Noticia";
import { getAllNews, getNewsByCat } from "../services/NoticiasServices";
import AuthContext from "../context/AuthContext";

const NoticiasPage = () => {
  const {categoria} = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    const request = async () => {
      if(categoria===undefined){
        const noticias = await getAllNews();
        setNews(noticias);
        setLoading(false);
      }
      else if(categoria!==undefined){
        const noticias = await getNewsByCat(categoria);
        setNews(noticias);
        setLoading(false);
      }
    };
    request();
  }, [categoria,refresh]);

  return (
    <AuthContext.Consumer>
      {
        context =>(
          <div>
            {
              loading && 
              <Spinner variant="primary" animation="border" role="status" style={{width:"4rem", height:"4rem", position: "fixed", top: "50%", left: "50%"}}><span className="visually-hidden">Cargando noticias</span></Spinner>
            }
            {
              context.userLogin &&
              <Button as={Link} to="/noticias/alta" style={{justifyContent:"center",display:"flex", marginBottom:"2rem"}}>Nueva noticia</Button>
            }
            <div className="holder">
            <div className="fondo-noticias">
              {
                categoria===undefined &&
                <h1 style={{textAlign:"center"}}>Ultimas noticias</h1>
              }
              {
                categoria==="gaming" &&
                <h1 style={{textAlign:"center"}}>Gaming</h1>
              }
              {
                categoria==="moviles" &&
                <h1 style={{textAlign:"center"}}>Móviles</h1>
              }
              {
                categoria==="ciencia" &&
                <h1 style={{textAlign:"center"}}>Ciencia</h1>
              }
              {
                categoria==="reviews" &&
                <h1 style={{textAlign:"center"}}>Reviews</h1>
              }
              
            <Row style={{marginTop:"1rem",marginBottom:"1rem",width:"100%",marginRight:"auto",marginLeft:"auto"}}>
              {news.map((n) => (<Noticia key={n.id} titulo={n.data().titulo} subtitulo={n.data().subtitulo} cuerpo={n.data().cuerpo} id={n.id} urlImagen={n.data().urlImagen} categoria={n.data().categoria} fecha={n.data().fecha} setRefresh={setRefresh}/>))}
            </Row>
            </div>
            </div>
            </div>
        )
      }
    </AuthContext.Consumer>
  );
};

export default NoticiasPage;
