import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import "./../styles/components/pages/HomePage.css";
import { getAllNews } from "../services/NoticiasServices";

const HomePage = (props) => {

  const [news, setNews] = useState([]);
  const [loaded,setLoaded] = useState(false);

  useEffect(() => {
    const request = async () => {
      const noticias = await getAllNews();
      setNews(noticias);
      setLoaded(true);
    };
    request();
  }, []);

  return (
    <main className="holder">
      {
        loaded &&
        <Carousel>
        {news.slice(0, 5).map((n) => (
        <Carousel.Item key={n.id}>
          <img src={n.data().urlImagen} alt={n.id}/>
          <Carousel.Caption>
            <div style={{backgroundColor:"rgba(0, 0, 0, .7)",padding:"1rem", borderRadius:"10px"}}>
            <h3>{n.data().titulo}</h3>
            <p>{n.data().subtitulo}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
      </Carousel>
      }

      <div className="columnas">
        <div className="bienvenidos">
          <h2>Bienvenidos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
            Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
            hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
            suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
            ac tincidunt quam enim non sem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec iaculis interdum tincidunt. Etiam
            sagittis lacinia sodales. Suspendisse aliquet metus eu sollicitudin
            aliquet. Sed erat ex, hendrerit sit amet odio sed, laoreet interdum
            nibh. Praesent suscipit, nisl nec tempor ultricies, justo sapien
            imperdiet metus, ac tincidunt quam enim non sem.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            iaculis interdum tincidunt. Etiam sagittis lacinia sodales.
            Suspendisse aliquet metus eu sollicitudin aliquet. Sed erat ex,
            hendrerit sit amet odio sed, laoreet interdum nibh. Praesent
            suscipit, nisl nec tempor ultricies, justo sapien imperdiet metus,
            ac tincidunt quam enim non sem. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Donec iaculis interdum tincidunt. Etiam
            sagittis lacinia sodales. Suspendisse aliquet metus eu sollicitudin
            aliquet. Sed erat ex, hendrerit sit amet odio sed, laoreet interdum
            nibh. Praesent suscipit, nisl nec tempor ultricies, justo sapien
            imperdiet metus, ac tincidunt quam enim non sem.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
