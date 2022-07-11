import React,{useState,useContext} from "react";
import {useForm} from "react-hook-form"
import {Button,Form} from 'react-bootstrap'
import fb from "../config/firebase";
import Alerts from "../components/Alerts";
import AuthContext from "../context/AuthContext";
import "./../styles/components/pages/Login.css";

function Login(){

    const{register,handleSubmit,formState:{errors}} = useForm();
    //const[validation,setValidation]=useState("0")
    const[alert,setAlert]=useState({variant:"",text:""})
    const[success,setSuccess] = useState(false)
    const context = useContext(AuthContext)

    const onSubmit = async(data) => {
        console.log("Form",data)
        try {
            const responseUser = await fb.auth().signInWithEmailAndPassword(data.email,data.password)
            //traigo nombre de usuario
            if(responseUser.user.uid){
                const userInfo = await fb.firestore().collection("usuarios").where("userId","==",responseUser.user.uid).get()
                if(userInfo){
                    context.loginUser(userInfo.docs[0]?.data())
                }
                setSuccess(true)
            }
        } catch (error) {
            //setValidation("2")
            if(error.code==="auth/user-not-found"){
                setAlert({variant:"danger",text:"Email no registrado"})
            }
            else if(error.code==="auth/wrong-password"){
                setAlert({variant:"danger",text:"Contraseña incorrecta"})
            }
        }  
    }

    return(
        <div>
            {
                success &&
                <Alerts variant={"success"} text={"Iniciando sesión..."}/>
            }
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
                <Alerts variant={alert.variant} text={alert.text}/>
            </Form>
        </div>
        )
    }
export default Login