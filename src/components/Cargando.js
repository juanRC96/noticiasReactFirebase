import { Spinner } from "react-bootstrap";

function Cargando() {

  return (
    <Spinner
      variant="primary"
      animation="border"
      role="status"
      style={{
        width: "4rem",
        height: "4rem",
        position: "fixed",
        top: "50%",
        left: "50%",
        marginLeft: "-2rem",
      }}
    >
    </Spinner>
  );
}

export default Cargando;
