import { useEffect, useState } from "react"
import Empleado from "../components/Empleado";
import { getAllEmp } from "../services/EmpleadosServices";
import {Row,Spinner} from "react-bootstrap"

function Empleados(){

    const [employees,setEmployees] = useState([])
    const [loading,setLoading] = useState(false)
    const [total,setTotal] = useState(0)

    useEffect(() => {
        setLoading(true)
        const request = async () => {
          const empleados = await getAllEmp();
          setEmployees(empleados);
          totalCalculate(empleados);
          setLoading(false);
        };
        request();
      }, []);

      const totalCalculate = (emp) => {
        let sum = 0;
        emp.map((m)=>(sum += parseInt(m.data().salario)))
        setTotal(sum.toLocaleString('es'));
      }


    return(
        <div className="holder">
            {loading && 
            <Spinner variant="primary" animation="border" role="status" style={{width:"4rem", height:"4rem", position: "fixed", top: "50%", left: "50%"}}><span className="visually-hidden">Cargando noticias</span></Spinner>
            }
          <Row style={{marginTop:"1rem", marginBottom:"1rem"}}>
            {employees.map((e)=><Empleado key={e.id} id={e.id} apellido={e.data().apellido} nombre={e.data().nombre} cargo={e.data().cargo} salario={e.data().salario} urlImagen={e.data().urlImagen}/>)}
          </Row>
          <div className="egresos">
            <h3 style={{padding:"1rem", fontStyle:"italic", color: "white", textAlign:"center"}}>Total salarios: ${total}</h3>
          </div>
        </div>
    )
}

export default Empleados