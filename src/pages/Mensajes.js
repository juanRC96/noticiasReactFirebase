import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Mensaje from "../components/Mensaje";
import { getAllMessages } from "../services/ContactoServices";

function Mensajes(){

    const [messages,setMessages] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const request = async() =>{
            try{
                const m = await getAllMessages();
                setMessages(m);
                setLoading(false);
            }catch(error){
                console.log(error);
                setLoading(false);
            }
        }
        request();
    },[refresh])

    return(
        <div className="holder">
            <div className="contenedor">
            {loading && 
            <Spinner variant="primary" animation="border" role="status" style={{width:"4rem", height:"4rem", position: "fixed", top: "50%", left: "50%"}}><span className="visually-hidden">Cargando noticias</span></Spinner>
            }
            <h1>Mensajes</h1>
            <Row style={{marginLeft:"auto",marginRight:"auto"}}>
                {messages.map((m)=><Mensaje key={m.id} id={m.id} nombre={m.data().nombre} email={m.data().email} telefono={m.data().telefono} mensaje={m.data().mensaje} setRefresh={setRefresh}/>)}
            </Row>
            </div>
        </div>
    )
}

export default Mensajes;