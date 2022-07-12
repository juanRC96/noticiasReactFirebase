import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { deleteImageNew, deleteNew, getByIdNews, updateNew } from "../services/NoticiasServices";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import Alerts from "../components/Alerts";

function NoticiasModificar() {
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const [success,setSuccess] = useState(false)

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getByIdNews(id);
        setValue("categoria", response.data().categoria);
        setValue("titulo", response.data().titulo);
        setValue("subtitulo", response.data().subtitulo);
        setValue("cuerpo", response.data().cuerpo);
        setValue("urlImagen", response.data().urlImagen);
        setValue("destacada", response.data().destacada);
        setValue("fecha", response.data().fecha);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      updateNew(id, data);
      setSuccess(true)
      setTimeout(()=>{
        navigate("/noticias")
    },1000)
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async() => {
    const response = await getByIdNews(id);
    const url = response.data().urlImagen;
    deleteImageNew(url);
    deleteNew(id);
    alert("Noticia borrada");
    setTimeout(()=>{
      navigate("/noticias")
  },1200)
  };

  return (
    <>
    {
      success &&
      <Alerts variant={"success"} text={"Datos modificados, redirigiendo..."}></Alerts>
    }
    <Form className="formulario" onSubmit={handleSubmit(onSubmit)}>

    <Form.Group className="linea" controlId="categoria">
        <Form.Label>Categoría</Form.Label>
          <Form.Select name="categoria" {...register("categoria", { required: true })}>
            <option value="destacada">Destacada</option>
            <option value="ciencia">Ciencia</option>
            <option value="gaming">Gaming</option>
            <option value="reviews">Review</option>
            <option value="moviles">Moviles</option>
            {errors.titulo && <span>El campo es obligatorio</span>}
          </Form.Select>
      </Form.Group>

      <Form.Group className="linea" controlId="fecha">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          name="fecha"
          {...register("fecha", { required: true })}
        />
        {errors.titulo && <span>El campo es obligatorio</span>}
      </Form.Group>

      <Form.Group className="linea" controlId="titulo">
        <Form.Label>Titulo</Form.Label>
        <Form.Control
          type="text"
          name="titulo"
          {...register("titulo", { required: true })}
        />
        {errors.titulo && <span>El campo es obligatorio</span>}
      </Form.Group>

      <Form.Group className="linea" controlId="subtitulo">
        <Form.Label>Subtitulo</Form.Label>
        <Form.Control
          type="text"
          name="subtitulo"
          {...register("subtitulo", { required: true })}
        />
        {errors.subtitulo && <span>El campo es obligatorio</span>}
      </Form.Group>

      <Form.Group className="linea" controlId="cuerpo">
        <Form.Label>Cuerpo</Form.Label>
        <Form.Control
          as="textarea"
          type="text"
          name="cuerpo"
          {...register("cuerpo", { required: true })}
        />
        {errors.cuerpo && <span>El campo es obligatorio</span>}
      </Form.Group>

      <Form.Group className="linea" controlId="destacada">
        <Form.Label>Destacada</Form.Label>
          <Form.Select name="destacada" {...register("destacada", { required: true })}>
            <option value="off">No</option>
            <option value="on">Sí</option>
            {errors.titulo && <span>El campo es obligatorio</span>}
          </Form.Select>
      </Form.Group>

      <Form.Group className="linea" controlId="url">
        <Form.Label></Form.Label>
        <Form.Control
          type="hidden"
          name="urlImagen"
          {...register("urlImagen", { required: true })}
        />
        {errors.apellido && <span>El campo es obligatorio</span>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Guardar
      </Button>
      <Button variant="danger" type="submit" onClick={handleDelete}>
        Eliminar
      </Button>
    </Form>
    </>
  );
}
export default NoticiasModificar;
