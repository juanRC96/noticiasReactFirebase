import { useEffect, useState } from "react"
import Empleado from "../components/Empleado";
import { getAllEmp } from "../services/EmpleadosServices";
import {Row,Spinner} from "react-bootstrap"
import Cargando from "../components/Cargando";

function Empleados(){

    const [employees,setEmployees] = useState([])
    const [loading,setLoading] = useState(false)
    const [total,setTotal] = useState(0)
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        setLoading(true)
        const request = async () => {
          const empleados = await getAllEmp();
          setEmployees(empleados);
          totalCalculate(empleados);
          setLoading(false);
        };
        request();
      }, [refresh]);

      const totalCalculate = (emp) => {
        let sum = 0;
        emp.map((m)=>(sum += parseInt(m.data().salario)))
        setTotal(sum.toLocaleString('es'));
      }


    return(
        <div className="holder">
            {loading && 
            <Cargando/>
            }
          <Row style={{marginTop:"1rem", marginBottom:"1rem",marginLeft:"auto",marginRight:"auto"}}>
            {employees.map((e)=><Empleado key={e.id} id={e.id} apellido={e.data().apellido} nombre={e.data().nombre} cargo={e.data().cargo} salario={e.data().salario} urlImagen={e.data().urlImagen} setRefresh={setRefresh}/>)}
          </Row>
          <div className="egresos">
            <h3 style={{padding:"1rem", fontStyle:"italic", color: "white", textAlign:"center"}}>Total salarios: ${total}</h3>
          </div>
        </div>
    )
}

export default Empleados