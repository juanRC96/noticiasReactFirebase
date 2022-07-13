import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
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
                <Spinner variant="primary" animation="border" role="status" style={{width:"4rem", height:"4rem", position: "fixed", top: "50%", left: "50%"}}></Spinner>
            }
            {
                !loading &&
                <div style={{width:"80%",backgroundColor:"white",marginRight:"auto",marginLeft:"auto", paddingLeft:"3%", paddingRight:"3%", paddingTop:"2rem", paddingBottom:"2rem",overflow: "hidden"}}>
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