import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cargando from "../components/Cargando";
import { getByIdNews } from "../services/NoticiasServices";

function NoticiasDetalle(){
    const {id} = useParams();
    const [loading,setLoading] = useState(true)
    const [noticia,setNoticia] = useState({categoria:"",titulo:"",subtitulo:"",urlImagen:"",cuerpo:"",epigrafe:"",autor:"",fecha:""})

    useEffect(()=>{
        const request = async() =>{
            const response = await getByIdNews(id);
            setNoticia(response.data())
            setLoading(false)
        }
    request();
    },[id])

    return(
        <>
            {
                loading &&
                <Cargando/>
            }
            {
                !loading &&
                <div style={{marginTop:"1rem",width:"100%",backgroundColor: "rgb(240,240,240)",marginRight:"auto",marginLeft:"auto", paddingLeft:"3%", paddingRight:"3%", paddingTop:"2rem", paddingBottom:"2rem",overflow: "hidden"}}>
                    <p style={{display:"inline-block"}}>{noticia.categoria}</p>
                    <p style={{display:"inline-block", float:"right", fontStyle:"italic"}}>{noticia.fecha}</p>
                    <h1 style={{textAlign:"center"}}>{noticia.titulo}</h1>
                    <p style={{textAlign:"center",fontSize:"23px"}}>{noticia.subtitulo}</p>
                    
                    <div style={{float:"right",width:"45%",marginLeft:"3%"}}>
                        <img src={noticia.urlImagen} alt="" style={{width:"100%", borderRadius:"10px"}}/>
                        <p style={{textAlign:"center",fontStyle:"italic"}}>{noticia.epigrafe}</p>
                    </div>
                    <p style={{fontSize:"17px"}}>{noticia.cuerpo}</p>
                    <p style={{marginTop:"2rem",fontStyle:"italic"}}>Autor: {noticia.autor}</p>
                    
                    
                </div>
            }
        </>
    )
}

export default NoticiasDetalle;