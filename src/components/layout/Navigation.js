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
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                <Nav.Link as={Link} to="/noticias">Noticias</Nav.Link>
                <Nav.Link as={Link} to="/balance" >Balance</Nav.Link>
                <Nav.Link as={Link} to="/empleados">Empleados</Nav.Link>
                <Nav.Link as={Link} to="/empleados/alta">Crear empleado</Nav.Link>
                <Nav.Link as={Link} to="/create">Crear usuario</Nav.Link>

                <NavDropdown title={context.userInfo.name+" "+context.userInfo.lastname} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={context.logoutUser}>Cerrar sesion</NavDropdown.Item>
                </NavDropdown> 
              </>
              }
    
              {!context.userLogin &&
              <>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/noticias">Ultimas noticias</Nav.Link>
                <Nav.Link as={Link} to="/noticias/categoria/gaming">Gaming</Nav.Link>
                <Nav.Link as={Link} to="/noticias/categoria/moviles">Móviles</Nav.Link>
                <Nav.Link as={Link} to="/noticias/categoria/ciencia">Ciencia</Nav.Link>
                <Nav.Link as={Link} to="/noticias/categoria/reviews">Reviews</Nav.Link>
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
