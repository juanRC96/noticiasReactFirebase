import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByIdNews } from "../services/NoticiasServices";

function NoticiasDetalle(){
    const {id} = useParams();
    const [noticia,setNoticia] = useState({categoria:"",titulo:"",subtitulo:"",urlImagen:"",cuerpo:""})

    useEffect(()=>{
        const request = async() =>{
            const response = await getByIdNews(id);
            setNoticia(response.data())
        }
    request();
    },[])

    return(
        <div className="noticiaDetalle" style={{width:"80%",backgroundColor:"white",marginRight:"auto",marginLeft:"auto", paddingLeft:"10rem", paddingRight:"10rem", paddingTop:"2rem", paddingBottom:"2rem"}}>
            <p>{noticia.categoria}</p>
            <h1>{noticia.titulo}</h1>
            <h4>{noticia.subtitulo}</h4>
            <div className="contenedorImagen">
                <img src={noticia.urlImagen} alt="" style={{width:"100%"}}/>
            </div>
            <p>{noticia.cuerpo}</p>
        </div>
    )
}

export default NoticiasDetalle;