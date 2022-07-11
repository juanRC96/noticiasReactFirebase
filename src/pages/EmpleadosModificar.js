import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { deleteEmp, deleteImageEmp, getByIdEmp, updateEmp } from "../services/EmpleadosServices";
import Alerts from "../components/Alerts";


function EmpleadosModificar() {
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
        const response = await getByIdEmp(id);
        setValue("apellido", response.data().apellido);
        setValue("nombre", response.data().nombre);
        setValue("cargo", response.data().cargo);
        setValue("salario", response.data().salario);
        setValue("urlImagen", response.data().urlImagen);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      updateEmp(id, data);
      setSuccess(true)
      setTimeout(()=>{
        navigate("/empleados")
    },1200)
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async() => {
    const response = await getByIdEmp(id);
    const url = response.data().urlImagen;
    deleteImageEmp(url);
    deleteEmp(id);
    alert("Noticia borrada");
    setTimeout(()=>{
      navigate("/empleados")
  },1000)
  };

  return (
    <>
    {
      success &&
      <Alerts variant={"success"} text={"Datos modificados, redirigiendo..."}></Alerts>
    }
    <Form className="formulario" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="linea" controlId="apellido">
        <Form.Label>apellido</Form.Label>
        <Form.Control
          type="text"
          name="apellido"
          {...register("apellido", { required: true })}
        />
        {errors.apellido && <span>El campo es obligatorio</span>}
      </Form.Group>

      <Form.Group className="linea" controlId="nombre">
        <Form.Label>nombre</Form.Label>
        <Form.Control
          type="text"
          name="nombre"
          {...register("nombre", { required: true })}
        />
        {errors.nombre && <span>El campo es obligatorio</span>}
      </Form.Group>

      <Form.Group className="linea" controlId="cargo">
        <Form.Label>cargo</Form.Label>
        <Form.Control
          type="text"
          name="cargo"
          {...register("cargo", { required: true })}
        />
        {errors.nombre && <span>El campo es obligatorio</span>}
      </Form.Group>

      <Form.Group className="linea" controlId="salario">
        <Form.Label>salario</Form.Label>
        <Form.Control
          type="text"
          name="salario"
          {...register("salario", { required: true })}
        />
        {errors.nombre && <span>El campo es obligatorio</span>}
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
export default EmpleadosModificar;
