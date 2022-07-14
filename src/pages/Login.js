import React,{useState,useContext} from "react";
import {useForm} from "react-hook-form"
import {Alert, Button,Form} from 'react-bootstrap'
import fb from "../config/firebase";
import AuthContext from "../context/AuthContext";

function Login(){

    const{register,handleSubmit,formState:{errors}} = useForm();
    const[alert,setAlert]=useState({variant:"",text:""})
    const context = useContext(AuthContext)

    const onSubmit = async(data) => {
        try {
            const responseUser = await fb.auth().signInWithEmailAndPassword(data.email,data.password)
            if(responseUser.user.uid){
                setAlert({variant:"success",text:"Iniciando sesion..."})
                const userInfo = await fb.firestore().collection("usuarios").where("userId","==",responseUser.user.uid).get()
                if(userInfo){
                    context.loginUser(userInfo.docs[0]?.data())
                }
            }
        } catch (error) {
            if(error.code==="auth/user-not-found"){
                setAlert({variant:"danger",text:"Email no registrado"})
                setTimeout(()=>{
                    setAlert({variant:"",text:""})
                },2000)
            }
            else if(error.code==="auth/wrong-password"){
                setAlert({variant:"danger",text:"Contraseña incorrecta"})
                setTimeout(()=>{
                    setAlert({variant:"",text:""})
                },2000)
            }
        }  
    }

    return(
        <div className="holder">
            <div className="contenedor">
            <Form className="formulario" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="linea" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email",{ required: true })}/>
                    {errors.email && <span>El campo es obligatorio</span>}
                </Form.Group>

                <Form.Group className="linea" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password",{ required: true })}/>
                    {errors.password && <span>El campo es obligatorio</span>}
                </Form.Group>
                <Button variant="primary" type="submit">Ingresar</Button>{' '}
                <Alert variant={alert.variant}>{alert.text}</Alert>
            </Form>
        </div>
        </div>
        )
    }
export default Login