import React from 'react';
import { NavLink  } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserLock} from '@fortawesome/free-solid-svg-icons'   
import { Navbar,Nav,Button,} from 'react-bootstrap'


const Navbard = () => {

    
const create =()=>{
    window.location.href = '/';
}
      



    return (
        <div className="sticky-top">

{JSON.parse(localStorage.getItem("logged"))  === true ? 
 
<Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">React Peliculas</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
 
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to='/peliculas'>Peliculas y Series</Nav.Link>
      
    </Nav>
  
    <Button> 
    <FontAwesomeIcon icon={faUserLock} onClick={create}></FontAwesomeIcon>
    </Button>
    

    </Navbar.Collapse>
  </Navbar>

  
 :
 <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Navbar.Brand href="#home">React Movies</Navbar.Brand>
   
  </Navbar> 
}


            </div>
    )
}
 
export default Navbard;