import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import { getNewsByCat } from "../services/NoticiasServices";

function Novedades() {
  const [items, setItems] = useState([]);
  const responsive = {
    0: { items: 1 },
    512: { items: 2 },
    1024: { items: 3 },
    1568: { items: 4}
  };

  useEffect(() => {
    const request = async () => {
      const noticias = await getNewsByCat("novedades");
      setAliceCarousel(noticias);
    };
    request();
  }, []);

  const setAliceCarousel = (noticias) => {
    setItems(
      noticias.map((n) => (
        <Link to={"/noticias/detalle/"+n.id} style={{textDecoration:"none"}}>
        <div
          className="item"
          data-value={n.id}
          style={{paddingLeft:"0.5rem",paddingRight:"0.5rem"}}
        >
         <img
            src={n.data().urlImagen}
            alt={n.id}
            style={{maxWidth:"100%",maxHeight:"15rem",display:"block",margin:"auto"}}
          />
         <h5 style={{ textAlign: "center",color:"white"}}>{n.data().titulo}</h5>
        </div></Link>
      ))
    );
  };

  return (
    <>
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
            autoPlayInterval="2000"
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
      ></div>
    </>
  );
}

export default Novedades;
