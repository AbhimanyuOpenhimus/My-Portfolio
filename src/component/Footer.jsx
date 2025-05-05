import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="text-light py-4 mt-4">
      <Container>
        <hr></hr>
        <Row className="align-items-center">
          <Col md={3} className="mb-3 mb-md-0 text-center text-md-start">
           <Nav.Link href="#home" ><h5 className="text-primary">AK | Abhimanyu Kumar</h5> </Nav.Link>
            <small>© 2025 All rights reserved.</small> 
          </Col>

          <Col md={3} className="mb-3 mb-md-0 text-center">
            <h6 className="text-info">Links</h6>
            <Nav className="flex-column flex-sm-row justify-content-center">
              <Nav.Link href="#about" className="text-light px-2">About</Nav.Link>
              <Nav.Link href="#skills" className="text-light px-2">Skills</Nav.Link>
              <Nav.Link href="#projects" className="text-light px-2">Projects</Nav.Link>
              <Nav.Link href="#contact" className="text-light px-2">Contact</Nav.Link>
            </Nav>
          </Col>

           <Col md={3} className="mb-3 mb-md-0 text-center">
            <h6 className="text-info">Services</h6>
             <Nav className="flex-column flex-sm-row justify-content-center">
                <span className="text-light px-2">Web Development</span>
                <span className="text-light px-2">UI/UX Design</span>
                <span className="text-light px-2">Consulting</span>
            </Nav>
          </Col>

          <Col md={3} className="text-center text-md-end ">
            <a href="https://github.com/AbhimanyuOpenhimus" target="_blank" rel="noopener noreferrer" className="text-light  px-2 me-2 fs-5"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light px-2 me-2 fs-5"><FaLinkedin /></a>
            <a href="https://api.whatsapp.com/send/?phone=917762034687&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-light px-2 me-2 fs-5"><FaWhatsapp /></a>
            <a href="mailto:abhimanyuku20@gmail.com" target="_blank" rel="noopener noreferrer" className="text-light px-2 fs-5"><FaEnvelope /></a>
            {/* <div className="mt-2">
            <a href="mailto:abhimanyuku20@gmail.com" className="contact-info-value">
                  abhimanyuku20@gmail.com
                </a>
            </div> */}
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;