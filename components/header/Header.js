import React from 'react';
import {Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const navBar = () => {
    return ( 
      <div>
      <section className="container">
                    <div className="row">
                           <div className="col-6  p-2 text-left"> <a  href='https://noc.ap.in/'><img src="/assets/logo1.png" alt="logo1" /></a> </div>
                           <div className="col-6  p-2 text-right"> <a  href='https://noc.ap.in/'><img src="/assets/logo2.png" alt="logo1" /></a> </div>
                    </div>
      </section>
        <Navbar className="navbar" bg="light" expand="md">
        <div className="container">
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="mr-auto">
             <Nav.Link href="/home">Home</Nav.Link>
             <Nav.Link href="/awards">Awards</Nav.Link>
             <Nav.Link href="/services">Services</Nav.Link>
             <Nav.Link href="/infrastructure">Infrastructure</Nav.Link>
             <Nav.Link href="/directory">Directory</Nav.Link> 
             <Nav.Link href="/events">Events</Nav.Link>
             <Nav.Link href="/contactUs">Contact Us</Nav.Link> 
             <Nav.Link href="https://servicedesk.nic.in/">Helpdesk</Nav.Link>

         </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
     </div>
    );
}
 
export default navBar;