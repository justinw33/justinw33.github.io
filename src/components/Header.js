import React from 'react'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = () => {
    const expand = 'md'


    return (
        <header>
            <Navbar bg="dark" variant='dark' expand={expand} collapseOnSelect>
                <Container fluid>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Hong Kong Driving School</Navbar.Brand>
                    </LinkContainer>
            
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >

                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Hong Kong Driving School
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>

                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Item>
                                    <Nav.Link href="/testing">TESTING</Nav.Link> 
                                </Nav.Item>

                                <NavDropdown title="LESSONS">
                                    <NavDropdown.Item href="/teenlessons">TEEN</NavDropdown.Item>
                                    <NavDropdown.Item href="/adultlessons">ADULT</NavDropdown.Item>
                                </NavDropdown>
                        
                                <Nav.Item>
                                    <Nav.Link href="/contact">CONTACT</Nav.Link>
                                </Nav.Item>                               
 
                            </Nav>
                        </Offcanvas.Body>                    
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
        </header>
    )
}

export default Header

// <NavDropdown title="LESSONS">
// <NavDropdown.Item href="/teenlessons">TEEN</NavDropdown.Item>
// <NavDropdown.Item href="/adultlessons">ADULT</NavDropdown.Item>
// </NavDropdown>


// <Nav.Link href="#action1"><FontAwesomeIcon icon={faCar} /> Testing </Nav.Link> 
// <Nav.Link href="#action2"><FontAwesomeIcon icon={faSchool} /> Teen Drivers Ed </Nav.Link> 
// <Nav.Link href="#action2"><FontAwesomeIcon icon={faUser} /> Adult Lessons </Nav.Link> 
// <Nav.Link href="#action2"><FontAwesomeIcon icon={faCoffee} /> Location & Contact </Nav.Link>