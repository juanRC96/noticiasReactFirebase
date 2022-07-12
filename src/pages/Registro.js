import React, { useState } from "react";
import {useForm} from "react-hook-form"
import {Button,Form} from 'react-bootstrap'
import firebase from "../config/firebase";
import "./../styles/components/pages/Registro.css";
import {useNavigate} from "react-router-dom"
import Alerts from "../components/Alerts";

function Registro(){

    const{register,handleSubmit,formState:{errors}} = useForm();
    const[success,setSuccess] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async(data) => {
        try {
            const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
            console.log(responseUser)
            if(responseUser.user.uid){
                firebase.firestore().collection("usuarios")
                .add({
                    name:data.nombre,
                    lastname: data.apellido,
                    userId: responseUser.user.uid
                })
            }
            setSuccess(true)
            setTimeout(()=>{
                navigate("/")
            },1000)
        } catch (error) {
            console.log(error)
        }
        
    }

        return(
            <div className="holder">
                {
                    success &&
                    <Alerts variant={"success"} text={"Usuario cargado con exito, redirigiendo..."}></Alerts>
                }
                <Form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                <h3>Registrar usuario</h3>
                <Form.Group className="linea" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="nombre" {...register("nombre",{ required: true })} />
                    {errors.password && <span>El campo es obligatorio</span>}
                </Form.Group>
                <Form.Group className="linea" controlId="formBasicEmail">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="apellido" {...register("apellido",{ required: true })} />
                    {errors.password && <span>El campo es obligatorio</span>}
                </Form.Group>
                <Form.Group className="linea" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="nombre" placeholder="email" {...register("email",{ required: true })} />
                    {errors.password && <span>El campo es obligatorio</span>}
                </Form.Group>
                <Form.Group className="linea" controlId="formBasicEmail">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="nombre" placeholder="contraseña" {...register("password",{ required: true })} />
                    {errors.password && <span>El campo es obligatorio</span>}
                </Form.Group>
                <Button variant="primary" type="submit">Registrar</Button>{' '}
                </Form>
            </div>
        )
    }
export default Registro