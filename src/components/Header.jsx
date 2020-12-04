import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component {
  
    render() { 
        return ( 
            <div className="wrapper">
                 <h1> Travel Agency <span className="orange">.</span></h1>
                 <Navbar bg="dark" variant="dark">
                 <Navbar.Brand href="#home">Home</Navbar.Brand>
                 <Nav className="mr-auto">
                 <Nav.Link href="#desti">Destinations</Nav.Link>
                 <Nav.Link href="#features">Promotions</Nav.Link>
                 <Nav.Link href="#circuit">Circuits</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
                </Navbar>
            </div>
            
         );
    }
}
 
export default NavBar;