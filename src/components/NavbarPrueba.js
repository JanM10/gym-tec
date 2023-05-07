import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'

const NavbarPrueba = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Gym TEC</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Sucursales">Sucursales</Nav.Link>
                        <Nav.Link href="/TSpa">Tratamiento-Spa</Nav.Link>
                        <Nav.Link href="/Puestos">Puestos</Nav.Link>
                        <Nav.Link href="/TPlanilla">Tipos Planilla</Nav.Link>
                        <NavDropdown title="Mas Links" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/Empleados">Empleados</NavDropdown.Item>
                            <NavDropdown.Item href="/Inventario">Inventario</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarPrueba;