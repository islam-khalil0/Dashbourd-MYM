import React, { useEffect, useState } from 'react'
import './nav.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import i18n from "../../i18.js";
import { useTranslation } from 'react-i18next'
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/Logo.png"
import National_Flag_Of_Egypt from "../../assets/National_Flag_Of_Egypt.png"

const index = () => {
  // const [color,setColor] = useState("white");
  const { t, i18n } = useTranslation()

  
  return (
    <div>
      <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="navlinks me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link to="/" className="navbarLinks" href="/">Employees & Tranings</Nav.Link>
            <Nav.Link to="/ourBlogs" className="navbarLinks" href="/ourBlogs">Our Blogs</Nav.Link>
            <Nav.Link to="/projects" className="navbarLinks" href="/projects">Projects</Nav.Link>
            <Nav.Link to="/positions" className="navbarLinks" href="/positions">Positions</Nav.Link>
            <Nav.Link to="/clients-feedback" className="navbarLinks" href="/clients-feedback">Certclients' feedbackificate</Nav.Link>
            <Nav.Link to="/certificate" className="navbarLinks" href="/certificate">Certificate</Nav.Link>

          </Nav>
          <Form className="d-flex">
            <Button variant="" style={{border:"1px solid #FF1013" ,color:"#FF1013"}}>اللغة العربية<img style={{marginLeft:"0.3rem"}} src={National_Flag_Of_Egypt} alt="Egypt Flag" /></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default index