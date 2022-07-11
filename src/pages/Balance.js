import { useEffect, useState } from "react";
import { Accordion, Button, Form, ProgressBar, Table } from "react-bootstrap";
import {
  createMove,
  getAllMovements,
  deleteMovement,
} from "../services/BalanceServices";
import "./../styles/components/pages/Balance.css";

function Balance() {
  const [form, setForm] = useState({
    tipo: "ingreso",
    detalle: "",
    valor: "",
  });
  const [movements, setMovements] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [total, setTotal] = useState(0);
  const [incomes, setIncomes] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    const response = async () => {
      const mov = await getAllMovements();
      setMovements(mov);
      totalCalculate(mov);
      totalIncomes(mov);
      totalExpenses(mov);
    };
    response();
    console.log("se ejecuto el useEffect");
  }, [refresh]);

  const deleteMove = async (id) => {
    await deleteMovement(id);
    setRefresh((old) => old + 1);
  };

  const totalCalculate = (mov) => {
    let sum = 0;
    mov.forEach((m) => (sum += parseInt(m.data().valor)));
    setTotal(sum.toLocaleString("es"));
  };

  const totalIncomes = (mov) => {
    let inc = 0;
    mov.forEach((m) => {
      if (m.data().tipo === "ingreso") {
        inc += parseInt(m.data().valor);
      }
    });
    setIncomes(parseFloat(inc));
  };

  const totalExpenses = (mov) => {
    let exp = 0;
    mov.forEach((m) => {
      if (m.data().tipo === "egreso") {
        exp += parseInt(m.data().valor);
      }
    });
    setExpenses(Math.abs(parseFloat(exp)));
  };

  const handleClick = (event) => {
    event.preventDefault();
    try {
      if (form.tipo === "egreso") {
        form.valor = -Math.abs(form.valor);
        console.log(form.valor);
      } else if (form.tipo === "ingreso") {
        form.valor = Math.abs(form.valor);
        console.log(form.valor);
      }
      const document = createMove(form);
      if (document !== "") {
        setRefresh((old) => old + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  return (
    <>
      <div className="balance">
        <h3>Resumen</h3>
        <ProgressBar
          variant="success"
          animated
          now={(incomes * 100) / (incomes + expenses)}
          label={`$${incomes.toLocaleString("es")}`}
          style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "1rem", height:"2rem"}}
        />
        <ProgressBar
          variant="danger"
          animated
          now={(expenses * 100) / (incomes + expenses)}
          label={`$${expenses.toLocaleString("es")}`}
          style={{ fontSize: "1rem", marginTop: "1rem", marginBottom: "1rem", height:"2rem"}}
        />
      </div>

      <div className="balance">
        <h3>Tabla</h3>
        <Table striped bordered hover style={{ fontSize: "20px" }}>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Detalle</th>
              <th>Valor</th>
              <th style={{ width: "10%" }}>Acción</th>
            </tr>
          </thead>
          <tbody>
            {movements.map((m) => (
              <tr>
                <td>{m.data().tipo}</td>
                <td>{m.data().detalle}</td>
                <td>${parseFloat(m.data().valor).toLocaleString("es")}</td>
                <td>
                  <Button
                    variant="danger"
                    style={{ width: "100%" }}
                    onClick={() => {
                      deleteMove(m.id);
                    }}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
            {
              <tr>
                <td></td>
                <td>
                  <b>Total</b>
                </td>
                <td>
                  <b>${total}</b>
                </td>
              </tr>
            }
          </tbody>
        </Table>
      </div>

      <div className="balance">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Agregar movimiento</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Tipo</Form.Label>
                  <Form.Select name="tipo" onChange={handleChange}>
                    <option value="ingreso">Ingreso</option>
                    <option value="egreso">Egreso</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Detalle</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="detalle"
                    name="detalle"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Valor</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="valor"
                    name="valor"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleClick}>
                  Cargar
                </Button>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
export default Balance;
