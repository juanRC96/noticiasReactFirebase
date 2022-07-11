import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../../styles/components/layout/Nav.css"
import AuthContext from "../../context/AuthContext";
import { NavDropdown } from "react-bootstrap";

function Navigation() {

  return (
    <AuthContext>
      {
        context => (
          <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
    
              {context.userLogin &&
              <>
                <Nav.Link as={Link} to="/" style={{marginLeft:"2rem",marginRight:"2rem", fontSize:"18px"}}>Home</Nav.Link>
                <Nav.Link as={Link} to="/nosotros" style={{marginLeft:"2rem",marginRight:"2rem", fontSize:"18px"}}>Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contacto" style={{marginLeft:"2rem",marginRight:"2rem", fontSize:"18px"}}>Contacto</Nav.Link>
                <Nav.Link as={Link} to="/noticias" style={{marginLeft:"2rem",marginRight:"2rem", fontSize:"18px"}}>Noticias</Nav.Link>
                <Nav.Link as={Link} to="/balance" style={{marginLeft:"2rem",marginRight:"2rem", fontSize:"18px"}}>Balance</Nav.Link>
                <Nav.Link as={Link} to="/empleados" style={{marginLeft:"2rem",marginRight:"2rem", fontSize:"18px"}}>Empleados</Nav.Link>
                <Nav.Link as={Link} to="/empleados/alta" style={{marginLeft:"2rem",marginRight:"2rem", fontSize:"18px"}}>Crear empleado</Nav.Link>
                <Nav.Link as={Link} to="/create" style={{marginLeft:"2rem",marginRight:"2rem", fontSize:"18px"}}>Crear usuario</Nav.Link>

                <NavDropdown title={context.userInfo.name+" "+context.userInfo.lastname} style={{marginLeft:"3rem",marginRight:"3rem", fontSize:"18px"}} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={context.logoutUser} style={{fontSize:"18px"}}>Cerrar sesion</NavDropdown.Item>
                </NavDropdown> 
              </>
              }
    
              {!context.userLogin &&
              <>
                <Nav.Link as={Link} to="/" style={{marginLeft:"3rem",marginRight:"3rem", fontSize:"25px"}}>Home</Nav.Link>
                <Nav.Link as={Link} to="/nosotros" style={{marginLeft:"3rem",marginRight:"3rem", fontSize:"25px"}}>Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/noticias" style={{marginLeft:"3rem",marginRight:"3rem", fontSize:"25px"}}>Noticias</Nav.Link>
                <Nav.Link as={Link} to="/contacto" style={{marginLeft:"3rem",marginRight:"3rem", fontSize:"25px"}}>Contacto</Nav.Link>
                <Nav.Link as={Link} to="/login" style={{marginLeft:"3rem",marginRight:"3rem", fontSize:"25px"}}>Iniciar sesion</Nav.Link>
              </>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        )
      }
    </AuthContext>
  );
}

export default Navigation;
