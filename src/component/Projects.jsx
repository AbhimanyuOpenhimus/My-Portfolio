import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import styled, { keyframes, css } from 'styled-components';
import placeholderImg from '/rupeefinance.png';
import lakshmimage from '/lakshmi.png';
import myschoolimg from '/myschool.png';
import school from '/school.png';



const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCol = styled(Col)`
  opacity: 0; /* Start hidden */
  animation: ${fadeInUp} 0.6s ease-out forwards;
  ${props => props.delay && css`
    animation-delay: ${props.delay};
  `}
`;

const StyledCard = styled(Card)`
  background-color: #343a40 !important; /* Dark secondary */
  color: #f8f9fa !important; /* Light text */
  height: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1); /* Subtle border */
  border-radius: 0.75rem; /* More rounded */
  overflow: hidden; /* Important for image zoom effect */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 123, 255, 0.25); /* Enhanced primary shadow */
  }
`;

const StyledCardImg = styled(Card.Img)`
  height: 200px;
  object-fit: cover;
  background: #555; /* Placeholder background color */
  transition: transform 0.4s ease-in-out;
  ${StyledCard}:hover & { /* Apply zoom only when hovering the Card */
    transform: scale(1.1);
  }
`;

const StyledTechBadge = styled(Badge)`
  background-color: #212529 !important; /* Dark */
  margin: 0.2rem;
  padding: 0.4rem 0.6rem !important;
  font-size: 0.8rem;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #0dcaf0 !important; /* Info color on hover */
    transform: translateY(-2px);
  }
`;

const StyledButton = styled(Button)`
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;


const projects = [
  { title: 'Rupee Finance', description: 'A full-featured Finance project with product catalog, financial plan, quick loans, investment plans, insurance and user login using mern.', tech: ['HTML','CSS','JavaScript','React.js', 'Node.js', 'Express.js', 'MongoDB',], codeLink: 'https://github.com/AbhimanyuOpenhimus/rupeefinance', liveLink: 'https://rupeefinance.netlify.app/', img: placeholderImg },
  { title: 'MyAwsome School CRUD Project', description: 'A simple CRUD task management application with real-time updates, like- Add student, show studend, edit sutdent , update and delete student.', tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB','Mongoose'], codeLink: 'https://github.com/AbhimanyuOpenhimus/My-School-CRUD-Project', liveLink: 'https://myawsomeschool.netlify.app/', img: myschoolimg },
  { title: 'Lakshmi Enterprises', description: 'A fully responsive and dynamic website for CCTV shop. They offer a comprehensive range of services and products, catering to both residential and commercial clients across multiple locations in Siwan,Bihar.', tech: ['Next.js', 'React.js', 'Node.js', 'Express.js', 'MongoDB',], codeLink: 'https://github.com/AbhimanyuOpenhimus/lakshmienterprises', liveLink: 'https://lenterprisessiw.vercel.app/', img: lakshmimage },
  { title: 'Patliputra Public School', description: 'A fully responsive demo school website.', tech: ['HTML','CSS','JavaScript','React', 'Google Maps'], codeLink: 'https://github.com/AbhimanyuOpenhimus/Patliputra-Public-School', liveLink: 'https://patliputrapublicschool.netlify.app/', img: school },
];


const ProjectCard = ({ project, index }) => {
  const imageSrc = project.img || 'https://via.placeholder.com/400x200'; 
  const animationDelay = `${index * 0.15}s`; 

  return (
    <AnimatedCol md={6} className="mb-4" delay={animationDelay}>
      <StyledCard> 
        <div style={{ overflow: 'hidden', height: '200px' }}> 
           <StyledCardImg variant="top" src={imageSrc} /> 
        </div>
        <Card.Body className="d-flex flex-column p-4"> 
          <Card.Title className="text-info fw-bold mb-3">{project.title}</Card.Title> 
          <Card.Text className="text-light small flex-grow-1">{project.description}</Card.Text> 
          <div className="my-3"> 
            {project.tech.map((t, i) => (
              <StyledTechBadge key={i} pill> 
                 {t}
              </StyledTechBadge>
            ))}
          </div>
          <div className="mt-auto pt-2">
            <StyledButton variant="outline-primary" href={project.codeLink} target="_blank" className="me-2"> {/* Use StyledButton */}
              <FaCode className="me-1" /> Code
            </StyledButton>
            <StyledButton variant="primary" href={project.liveLink} target="_blank">
               <FaExternalLinkAlt className="me-1" /> Live Demo
            </StyledButton>
          </div>
        </Card.Body>
      </StyledCard>
    </AnimatedCol>
  );
};


const Projects = () => {
  const placeholderFallback = placeholderImg || 'https://via.placeholder.com/400x200'; 
  const projectsWithFallback = projects.map(p => ({ ...p, img: p.img || placeholderFallback }));


  return (
    <Container className="py-5 projects-section-class" id="projects"> 
      <h2 className="text-center mb-5 display-5 fw-bold text-light">Featured <span className="text-primary">Projects</span></h2>
      <div className="contact-heading-underline mx-auto" style={{marginTop:-30}}></div>
      <Row style={{marginTop:50}}>
        {projectsWithFallback.map((proj, index) => (
          <ProjectCard key={index} project={proj} index={index} />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;