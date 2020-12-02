import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
  
    render() { 
        return ( 
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Destinations</Nav.Link>
              <Nav.Link href="#features">Promotions</Nav.Link>
              <Nav.Link href="#pricing">Circuit</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            </Navbar>
         );
    }
}
 
export default NavBar;