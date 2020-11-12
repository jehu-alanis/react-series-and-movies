import React from 'react';
import { NavLink  } from 'react-router-dom'; 
import { Navbar,Nav} from 'react-bootstrap'


const Navbard = () => {


    return (
        <div className="sticky-top">


 
<Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">React Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
 
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to='/peliculas'>Peliculas y Series</Nav.Link>
      
    </Nav>
    

    </Navbar.Collapse>
  </Navbar>

 



            </div>
    )
}
 
export default Navbard;