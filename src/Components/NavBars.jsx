import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NewMovie from './NewMovie';
import Search from './Search';

const NavBars = ({rating,handleRating,handleText,handleAdd}) => {
  return (
    <div>
            <Navbar bg="light" expand="lg">
      <Container fluid id='fa'>
        <Navbar.Brand href="#"><h3>netflix</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><h3>Home</h3></Nav.Link>
            <Nav.Link href="#action2"><NewMovie handleAdd={handleAdd}/></Nav.Link>
            <NavDropdown title="Type Movie" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">drama</NavDropdown.Item>
              <NavDropdown.Item href="#action6">horreur</NavDropdown.Item>
              <NavDropdown.Item href="#action7">advantage</NavDropdown.Item>
              <NavDropdown.Item href="#action7">romantic</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#action5">comedy</NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <Form className="d-flex">
          <Search rating={rating} handleRating={handleRating} handleText={handleText}/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBars