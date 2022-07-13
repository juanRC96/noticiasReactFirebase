import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Mensaje from "../components/Mensaje";
import { getAllMessages } from "../services/ContactoServices";

function Mensajes(){

    const [messages,setMessages] = useState([]);
    const [refresh, setRefresh] = useState(0);

    useEffect(()=>{
        const request = async() =>{
            const m = await getAllMessages()
            setMessages(m)
        }
        request();
        console.log("useefect")
    },[refresh])

    return(
        <div className="holder">
            <Row style={{marginLeft:"auto",marginRight:"auto"}}>
            {messages.map((m)=><Mensaje key={m.id} id={m.id} nombre={m.data().nombre} email={m.data().email} telefono={m.data().telefono} mensaje={m.data().mensaje} setRefresh={setRefresh}/>)}
            </Row>
        </div>
    )
}

export default Mensajes;