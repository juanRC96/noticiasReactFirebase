import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import AuthContext from "../../context/AuthContext";
import { NavDropdown } from "react-bootstrap";
import { useState } from "react";

function Navigation() {

  const [expand, setExpand] = useState(false);

  return (
    <AuthContext.Consumer>
      {
        context => (
          <div style={{paddingTop:"4.5rem"}}>
          <Navbar bg="dark" expand="lg" variant="dark" expanded={expand} fixed="top">
          <Navbar.Toggle onClick={() => setExpand(expand ? false : "expanded")} aria-controls="basic-navbar-nav"/>

          <Navbar.Brand onClick={() => setExpand(false)} style={{paddingLeft:"1rem",transition: "transform .2s"}} className="brand" as={Link} to="/">
            <img alt="" src="images/tecnonews.jpg" width="60" height="60" className="imagebrand" style={{display:"inline-block",align:"center"}} /> <h2 style={{display:"inline-block"}}>TecnoNews</h2>
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-end">
            <Nav className="m-auto">
              {context.userLogin &&
              <>
                <Nav.Link as={Link} to="/" style={{paddingLeft:"10px",paddingRight:"10px"}} onClick={() => setExpand(false)}>Home</Nav.Link>
                <Nav.Link as={Link} to="/noticias" style={{paddingLeft:"10px",paddingRight:"10px"}} onClick={() => setExpand(false)}>Noticias</Nav.Link>
                <Nav.Link as={Link} to="/mensajes" style={{paddingLeft:"10px",paddingRight:"10px"}} onClick={() => setExpand(false)}>Mensajes</Nav.Link>
                <Nav.Link as={Link} to="/balance" style={{paddingLeft:"10px",paddingRight:"10px"}} onClick={() => setExpand(false)}>Balance</Nav.Link>
                <Nav.Link as={Link} to="/empleados" style={{paddingLeft:"10px",paddingRight:"10px"}} onClick={() => setExpand(false)}>Empleados</Nav.Link>
                <Nav.Link as={Link} to="/empleados/alta" style={{paddingLeft:"10px",paddingRight:"10px"}} onClick={() => setExpand(false)}>Crear empleado</Nav.Link>
                <Nav.Link as={Link} to="/create" style={{paddingLeft:"10px",paddingRight:"10px"}} onClick={() => setExpand(false)}>Crear usuario</Nav.Link>

                <NavDropdown title={context.userInfo.name+" "+context.userInfo.lastname} id="basic-nav-dropdown" style={{paddingLeft:"10px",paddingRight:"10px"}}>
                  <NavDropdown.Item onClick={context.logoutUser}>Cerrar sesion</NavDropdown.Item>
                </NavDropdown> 
              </>
              }
    
              {!context.userLogin &&
              <>
                <Nav.Link as={Link} to="/" style={{paddingLeft:"2rem",paddingRight:"2rem",fontSize:"20px"}} onClick={() => setExpand(false)}>Home</Nav.Link>
                <Nav.Link as={Link} to="/noticias" style={{paddingLeft:"2rem",paddingRight:"2rem",fontSize:"20px"}} onClick={() => setExpand(false)}>Ultimas noticias</Nav.Link>
                <Nav.Link as={Link} to="/noticias/categoria/gaming" style={{paddingLeft:"2rem",paddingRight:"2rem",fontSize:"20px"}} onClick={() => setExpand(false)}>Gaming</Nav.Link>
                <Nav.Link as={Link} to="/noticias/categoria/moviles" style={{paddingLeft:"2rem",paddingRight:"2rem",fontSize:"20px"}} onClick={() => setExpand(false)}>Móviles</Nav.Link>
                <Nav.Link as={Link} to="/noticias/categoria/ciencia" style={{paddingLeft:"2rem",paddingRight:"2rem",fontSize:"20px"}} onClick={() => setExpand(false)}>Ciencia</Nav.Link>
                <Nav.Link as={Link} to="/noticias/categoria/reviews" style={{paddingLeft:"2rem",paddingRight:"2rem",fontSize:"20px"}} onClick={() => setExpand(false)}>Reviews</Nav.Link>
              </>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        )
      }
    </AuthContext.Consumer>
  );
}

export default Navigation;
