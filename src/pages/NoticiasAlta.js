import { useState } from "react";
import { Accordion, Button, Form, Spinner } from "react-bootstrap";
import { createNew } from "../services/NoticiasServices";
import { storage } from "../config/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Alerts from "../components/Alerts";

function NoticiasAlta() {
  const [form, setForm] = useState({
    categoria: "ciencia",
    titulo: "",
    subtitulo: "",
    cuerpo: "",
    epigrafe: "",
    autor:"",
    url: "",
    destacada: "off",
    fecha: ""
  });
  const [image, setImage] = useState(null);
  const [loadingImg, setLoadingImg] = useState("0");
  const [imageAdded, setImageAdded] = useState(false);
  const [success, setSuccess] = useState(false);
  const [allowUpload, setAllowUpload] = useState(false);
  const navigate = useNavigate();

  //manejo envio formulario
  const handleClick = (event) => {
    event.preventDefault();
    try {
      const document = createNew(form);
      if (document !== "") {
        setSuccess(true);
        setTimeout(() => {
          navigate("/noticias");
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
        const imageRef = ref(storage, `images/${form.titulo || ""}.jpg`);
        uploadBytes(imageRef, image).then(() => {
          setUrl(imageRef);
        });
      } catch (error) {
        setLoadingImg("3");
      }
    }
  };

  //seteo url al form
  const setUrl = (ref) => {
    getDownloadURL(ref).then((u) => {
      setForm({ ...form, url: u });
      setLoadingImg("2");
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
    if (event.target.files[0] !== undefined) {
      setAllowUpload(true);
    } else if (event.target.files[0] === undefined) {
      setAllowUpload(false);
    }
  };

  return (
    <div className="holder">
      {success && (
        <Alerts variant="success" text="Noticia cargada, redirigiendo..." />
      )}
      <Form className="formulario">
        <Form.Group className="linea">
          <Form.Label>Categoría</Form.Label>
          <Form.Select name="categoria" onChange={handleChange}>
            <option value="ciencia">Ciencia</option>
            <option value="gaming">Gaming</option>
            <option value="reviews">Review</option>
            <option value="moviles">Moviles</option>
            <option value="novedades">Novedades</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="linea" controlId="fecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" name="fecha" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="linea" controlId="titulo">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" name="titulo" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="linea" controlId="subtitulo">
          <Form.Label>Subtitulo</Form.Label>
          <Form.Control type="text" name="subtitulo" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="linea" controlId="cuerpo">
          <Form.Label>Cuerpo</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="cuerpo"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="linea">
          <Form.Label>Epígrafe</Form.Label>
          <Form.Control type="text" name="epigrafe" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="linea">
          <Form.Label>Destacada</Form.Label>
          <Form.Select name="destacada" onChange={handleChange}>
            <option value="off">No</option>
            <option value="on">Sí</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="linea" controlId="autor">
          <Form.Label>Autor</Form.Label>
          <Form.Control type="text" name="autor" onChange={handleChange} />
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
                {allowUpload && (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleUpload}
                  >
                    {(loadingImg === "0" || loadingImg === "2" || loadingImg === "3") && 
                    <>Subir</>}
                    
                    {loadingImg === "1" && (
                      <>
                        Subiendo...
                        <Spinner
                          variant="light"
                          animation="border"
                          role="status"
                          style={{
                            marginLeft: "2rem",
                            width: "1rem",
                            height: "1rem",
                          }}
                        ></Spinner>
                      </>
                    )}
                  </Button>
                )}
                {imageAdded === false && (
                  <>
                    <Alerts variant="warning" text="No hay imagen cargada"/>
                  </>
                )}
                {loadingImg === "1" && (
                  <>
                    <Alerts variant="primary" text="Subiendo imagen..."/>
                  </>
                )}
                {loadingImg === "2" && (
                  <>
                    <Alerts variant="success" text="Imagen subida con exito"/>
                  </>
                )}
                {loadingImg === "3" && (
                  <>
                    <Alerts variant="danger" text="Hubo un problema al subir la imagen"/>
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
export default NoticiasAlta;
