import React, { useEffect, useState } from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Noticia from "../components/Noticia";
import { getAllNews, getNewsByCat } from "../services/NoticiasServices";
import "./../styles/components/pages/NoticiasPage.css";
import AuthContext from "../context/AuthContext";

const NoticiasPage = () => {
  const {categoria} = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      if(categoria===undefined){
        const noticias = await getAllNews();
        setNews(noticias);
        setLoading(false);
        console.log(noticias)
      }
      else if(categoria!==undefined){
        const noticias = await getNewsByCat(categoria);
        setNews(noticias);
        setLoading(false);
        console.log(noticias)
      }
    };
    request();
  }, [categoria]);

  return (
    <AuthContext>
      {
        context =>(
          <div className="noticias">
          <section className="holder">
            {
              loading && 
              <Spinner variant="primary" animation="border" role="status" style={{width:"4rem", height:"4rem", position: "fixed", top: "50%", left: "50%"}}><span className="visually-hidden">Cargando noticias</span></Spinner>
            }
            {
              context.userLogin &&
              <Button as={Link} to="/noticias/alta" style={{justifyContent:"center",display:"flex", marginBottom:"2rem"}}>Nueva noticia</Button>
            }
            <Row>
              {news.map((n) => (<Noticia key={n.id} titulo={n.data().titulo} subtitulo={n.data().subtitulo} cuerpo={n.data().cuerpo} id={n.id} urlImagen={n.data().urlImagen} categoria={n.data().categoria}/>))}
            </Row>
          </section>
        </div>
        )
      }
    </AuthContext>
  );
};

export default NoticiasPage;
