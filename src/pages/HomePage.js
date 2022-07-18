import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { getFeaturedNews } from "../services/NoticiasServices";
import { Link } from "react-router-dom";
import NoticiasPage from "./NoticiasPage";
import Novedades from "../components/Novedades";
import Cargando from "../components/Cargando";

const HomePage = (props) => {
  const [news, setNews] = useState([]);
  const [loading,setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const request = async () => {
      const noticias = await getFeaturedNews();
      setNews(noticias);
      setLoading(false);
      setLoaded(true);
    };
    request();
  }, []);



  return (
    <main>
      <div className="holder">
        {
          loading &&
          <Cargando/>
        }
        {loaded && (
          <Carousel>
            {news.map((n) => (
              <Carousel.Item key={n.id}>
                <Link to={"/noticias/detalle/" + n.id}>
                  <img src={n.data().urlImagen} alt={n.id} />
                </Link>

                <Link to={"/noticias/detalle/" + n.id}>
                  <Carousel.Caption>
                    <div
                      style={{
                        backgroundColor: "rgba(0, 0, 0, .7)",
                        padding: "1rem",
                        borderRadius: "10px",
                      }}
                    >
                      <h3>{n.data().titulo}</h3>
                      <p>{n.data().subtitulo}</p>
                    </div>
                  </Carousel.Caption>
                </Link>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </div>
      <Novedades/>
      <NoticiasPage></NoticiasPage>
    </main>
  );
};

export default HomePage;
