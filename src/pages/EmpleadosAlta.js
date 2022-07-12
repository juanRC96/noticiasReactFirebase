import { useState } from "react";
import { Accordion, Button, Form, Spinner } from "react-bootstrap";
import "./../styles/components/pages/NoticiasAlta.css";
import { storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Alerts from "../components/Alerts";
import { createEmp } from "../services/EmpleadosServices";

function EmpleadosAlta() {
  const [form, setForm] = useState({
    apellido: "",
    nombre: "",
    cargo: "",
    salario: "",
    url: "",
  });
  const [image, setImage] = useState(null);
  const [loadingImg, setLoadingImg] = useState("0");
  const [imageAdded, setImageAdded] = useState(false);
  const [success,setSuccess] = useState(false);
  const navigate = useNavigate();

  //manejo envio formulario
  const handleClick = (event) => {
    event.preventDefault();
    try {
      const document = createEmp(form);
      console.log(form)
      if (document !== "") {
        setSuccess(true)
        setTimeout(() => {
          navigate("/empleados");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //subida de imagen
  const handleUpload = (event) => {
    setImageAdded(true);
    setLoadingImg("1");
    event.preventDefault();
    if (image !== null) {
      try {
        const imageRef = ref(storage, `employees/${form.apellido+form.nombre || ""}.jpg`);
        uploadBytes(imageRef, image).then(() => {
          setUrl(imageRef)
        });
      } catch (error) {
        setLoadingImg("3");
      }
    }
  };

  const setUrl = (ref) => {
    getDownloadURL(ref).then((u) => {
      setForm({ ...form, url: u });
      setLoadingImg("2");
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="holder">
      {
        success &&
        <Alerts variant="success" text="Empleado cargado, redirigiendo..."/>
      }
      <Form className="formulario">
      <h3>Registrar nuevo empleado</h3>
        <Form.Group className="linea" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" name="apellido" placeholder="apellido" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="linea" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="nombre" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="linea" controlId="cargo">
          <Form.Label>Cargo</Form.Label>
          <Form.Control type="text" name="cargo" placeholder="cargo" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="linea" controlId="salario">
          <Form.Label>Salario</Form.Label>
          <Form.Control type="text" name="salario" placeholder="salario" onChange={handleChange} />
        </Form.Group>

        <Accordion className="formulario">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Añadir imagen</Accordion.Header>
          <Accordion.Body>
            <Form className="formulario">
              <Form.Group className="linea" controlId="imagen">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="file" name="url" onChange={handleImage} />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleUpload}>
                Subir
              </Button>
              {imageAdded === false && (
                <>
                  <Alerts variant="warning" text="No hay imagen cargada" />
                </>
              )}
              {loadingImg === "1" && (
                <>
                  <Spinner
                    variant="primary"
                    animation="border"
                    role="status"
                    style={{
                      marginLeft: "2rem",
                      width: "1rem",
                      height: "1rem",
                    }}
                  >
                    <span className="visually-hidden">Cargando noticias</span>
                  </Spinner>
                  <Alerts variant="primary" text="Subiendo imagen..." />
                </>
              )}
              {loadingImg === "2" && (
                <>
                  <Alerts variant="success" text="Imagen subida con exito" />
                </>
              )}
              {loadingImg === "3" && (
                <>
                  <Alerts
                    variant="danger"
                    text="Hubo un problema al subir la imagen"
                  />
                </>
              )}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>


        <Button variant="primary" type="submit" onClick={handleClick}>
          Guardar
        </Button>
      </Form>
    </div>
  );
}
export default EmpleadosAlta;
