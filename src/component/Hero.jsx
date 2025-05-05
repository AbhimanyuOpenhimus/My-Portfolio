import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import avatar from '/hero3.png';
import AudioToggleButton from './AudioToggleButton'; 

const HeroSection = () => {
  const avatarSrc = avatar || 'https://via.placeholder.com/300';

  return (
    <Container fluid className="text-light py-5 hero-section-class" id="home">
      <AudioToggleButton /> 
      <Container>
        <Row className="align-items-center">
          <Col md={7} className="mb-4 mb-md-0">
            <h4 className="text-warning mt-2 "> 👋 Hello, you can call me Abhi</h4>
            <h1 className="display-4 fw-bold text-white mb-3 mt-3" style={{fontFamily:'Game Of Squids'}}>Abhimanyu <span className='display-4 fw-bold text-primary mb-3'>Kumar</span>
            </h1>
            <h3 className="text-warning mb-4" style={{ height: '3rem' }}>
              <TypeAnimation
                sequence={[
                  'A MERN Full Stack Developer',
                  2000,
                  'A Frontend Developer',
                  2000,
                  'A Backend Developer',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={30}
                deletionSpeed={65}
                style={{ display: 'inline-block' }}
              />
            </h3>
            <p className="lead mb-4" style={{fontFamily:'Calibri'}}>
              I build exceptional and scalable web applications using the MERN stack with <br></br>
              a focus on performance, user experience, and modern design principles.
            </p>
            <Button variant="primary" size="lg" href="#projects" className="me-3">View My Work</Button>
            <Button variant="outline-light" size="lg" href="#contact">Contact Me</Button>
            <div className="mt-4">
              <a href="https://github.com/AbhimanyuOpenhimus" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4"><FaGithub /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 fs-4"><FaLinkedin /></a>
              <a href="https://wa.me/917762034687https://api.whatsapp.com/send/?phone=917762034687&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-light fs-4"><FaWhatsapp /></a>
            </div>
          </Col>
          <Col md={5} className="text-center">
            <Image
              src={avatarSrc}
              alt="Abhimanyu Kumar Avatar"
              fluid
              roundedCircle
              style={{
                marginTop:'20px',
                maxWidth: 'auto',
                filter: 'drop-shadow(0 0 20px rgba(0, 123, 255, 0.6))',
                 border: '3px solid rgba(0, 123, 255, 0.3)'
              }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default HeroSection;