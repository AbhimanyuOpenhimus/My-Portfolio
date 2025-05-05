import React from 'react';
import { Container, Row, Col, Image, Badge } from 'react-bootstrap';
import { BsCheckCircleFill } from 'react-icons/bs';
import aboutAvatar from '/photo.jpg'; 

const Aboutme = () => {
  return (
    <Container className="py-5 text-light" id='about' >
       <h2 className="text-center mb-5 display-5 fw-bold">Who <span className="text-primary">I Am</span></h2>
       <div className="contact-heading-underline mx-auto" style={{marginTop:-30}}></div>
      <Row className="align-items-center" style={{marginTop:20}}>
        <Col md={5} className="text-center mb-md-0 position-relative">
          <Image
            src={aboutAvatar} 
            alt="About Abhimanyu"
            fluid
            style={{ maxWidth: 'auto', border: '3px solid #0d6efd', borderRadius: '15px', padding: '5px', background: 'white', marginTop:'40px' }}
          />
          {/* <Badge bg="success" pill className="position-absolute bottom-0 end-0 m-3 fs-6">
            2+ Years Experience
          </Badge> */}
        </Col>
        <Col md={7}>
          <h3 className="text-warning mt-3">MERN Full Stack Developer</h3>
          <p>
            Hi there! I'm Abhimanyu Kumar, but you can call me Abhi. I'm a passionate MERN Full Stack Developer with expertise in building robust and scalable web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences that drive business growth.
          </p>
          <p>
            My journey in web development started with a curiosity about how things work on the internet, which evolved into a deep passion for creating digital solutions. I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js) and have experience with various modern web technologies.
          </p>
          <Row className="my-4">
            <Col md={6} className="mb-3">
              <div className="p-3 bg-primary rounded">
                <strong>Name:</strong>
                <p className="mb-0">Abhimanyu Kumar</p>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="p-3 bg-primary rounded">
                <strong>Email:</strong>
                <p className="mb-0">abhimanyuku20@gmail.com</p>
              </div>
            </Col>
            <Col md={6} className="mb-3">
              <div className="p-3 bg-primary rounded">
                <strong>Phone:</strong>
                <p className="mb-0">+91 7762034687</p>
              </div>
            </Col>
            <Col md={6} className="mb-3">
               <div className="p-3 bg-primary rounded">
                <strong>Location:</strong>
                <p className="mb-0">India</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}><BsCheckCircleFill className="text-warning me-2" /> React.js</Col>
            <Col sm={6}><BsCheckCircleFill className="text-warning me-2" /> Node.js</Col>
            <Col sm={6}><BsCheckCircleFill className="text-warning me-2" /> MongoDB</Col>
            <Col sm={6}><BsCheckCircleFill className="text-warning me-2" /> Express.js</Col>
            <Col sm={6}><BsCheckCircleFill className="text-warning me-2" /> Next.js</Col>
            <Col sm={6}><BsCheckCircleFill className="text-warning me-2" /> MySQL</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Aboutme;