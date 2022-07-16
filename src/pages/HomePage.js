import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { getFeaturedNews } from "../services/NoticiasServices";
import { Link } from "react-router-dom";
import NoticiasPage from "./NoticiasPage";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const HomePage = (props) => {
  const [news, setNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  useEffect(() => {
    const request = async () => {
      const noticias = await getFeaturedNews();
      setNews(noticias);
      setAliceCarousel(noticias);
      setLoaded(true);
    };
    request();
  }, []);

  const setAliceCarousel = (noticias) => {
    setItems(
      noticias.map((n) => (
        <div
          className="item"
          data-value={n.id}
          style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
        >
          <img
            src={n.data().urlImagen}
            alt={n.id}
            style={{ width: "100%", height: "100%" }}
          />
          <h5 style={{ textAlign: "center" }}>{n.data().titulo}</h5>
        </div>
      ))
    );
  };

  return (
    <main>
      <div className="holder">
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
      <div className="holder">
        <div
          className="fondo-noticias"
          style={{
            paddingTop: "1rem",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <AliceCarousel
            mouseTracking
            items={items}
            responsive={responsive}
            controlsStrategy="alternate"
            animationDuration="600"
            autoPlay="true"
            autoPlayStrategy="default"
            autoPlayControls="true"
            autoPlayDirection="ltr"
            autoPlayInterval="1500"
            infinite="true"
          />
        </div>
      </div>
      <div
        className="holder"
        style={{
          textAlign: "center",
          color: "white",
          backgroundColor: "black",
        }}
      >
        <h1>Ultimas noticias</h1>
      </div>
      <NoticiasPage></NoticiasPage>
    </main>
  );
};

export default HomePage;
