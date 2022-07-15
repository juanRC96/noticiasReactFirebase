import Carousel from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import { getFeaturedNews } from "../services/NoticiasServices";
import { Link } from "react-router-dom";

const HomePage = (props) => {

  const [news, setNews] = useState([]);
  const [loaded,setLoaded] = useState(false);

  useEffect(() => {
    const request = async () => {
      const noticias = await getFeaturedNews();
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
        {news.map((n) => (
        <Carousel.Item key={n.id}>
          <Link to={"/noticias/detalle/"+n.id}><img src={n.data().urlImagen} alt={n.id}/></Link>
          <Link to={"/noticias/detalle/"+n.id}><Carousel.Caption>
            <div style={{backgroundColor:"rgba(0, 0, 0, .7)",padding:"1rem", borderRadius:"10px"}}>
            <h3>{n.data().titulo}</h3>
            <p>{n.data().subtitulo}</p>
            </div>
          </Carousel.Caption></Link>
        </Carousel.Item>
        ))}
      </Carousel>
      }
        <div className="contenedor">
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
    </main>
  );
};

export default HomePage;
