import { Alert } from "react-bootstrap";

function Alerts(props){
    return(
        <Alert variant={props.variant}>{props.text}</Alert>
    )
}

export default Alerts