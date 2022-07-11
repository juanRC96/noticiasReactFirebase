import React,{useState} from "react"
import AuthContext from "./AuthContext"
import {useNavigate} from "react-router-dom";


function AuthProvider(props){
    const [userLogin,setUserLogin] = useState(localStorage.getItem("login")|| false)
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem("userInfo"))||{})
    const navigate = useNavigate()

    const loginUser = (userInfo) => {
        setUserLogin(true)
        setUserInfo(userInfo)
        localStorage.setItem("login",true)
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        setTimeout(()=>{
            navigate("/")
        },1000)
    }
    const logoutUser = () => {
        setUserLogin(false)
        localStorage.removeItem("login")
        setTimeout(()=>{
            navigate("/")
        },1000)
    }

    return(
        <AuthContext.Provider value={{
            userLogin,
            loginUser,
            logoutUser,
            userInfo
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider