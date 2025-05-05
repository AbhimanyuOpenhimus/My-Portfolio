import React from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaGitAlt, FaTools, FaGlobe, FaBrain } from 'react-icons/fa';
import styled, { keyframes, css } from 'styled-components'; 

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled(Card)`
  background-color: #343a40 !important; /* Bootstrap dark secondary */
  color: #f8f9fa !important; /* Light text */
  height: 100%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 0.5rem; /* Slightly more rounded */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  opacity: 0; /* Start hidden for animation */
  animation: ${fadeIn} 0.5s ease-out forwards;
  /* Stagger animation delay - requires passing index */
  ${props => props.delay && css`
    animation-delay: ${props.delay};
  `}

  &:hover {
    transform: translateY(-10px) scale(1.03); /* Lift and slightly enlarge */
    box-shadow: 0 12px 24px rgba(0, 123, 255, 0.3); /* Enhanced shadow with primary color tint */
  }

  /* Optional: Animate icon on card hover */
  &:hover svg {
     transform: scale(1.1) rotate(5deg);
     transition: transform 0.3s ease-in-out;
  }
  svg {
    transition: transform 0.3s ease-in-out; /* Smooth transition back */
  }
`;

const StyledBadge = styled(Badge)`
  background-color: #212529 !important; /* Bootstrap dark */
  margin: 0.25rem; /* Slightly increased margin */
  padding: 0.5rem 0.75rem !important; /* Slightly larger padding */
  font-size: 0.85rem;
  transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
     background-color: #0d6efd !important; /* Primary color on hover */
     transform: scale(1.05);
  }
`;


// --- Skills Data ---
const skillsData = [
  { icon: <FaReact size={30} className="mb-2 text-info"/>, title: 'Frontend', skills: ['HTML5', 'CSS3','Bootstrap', 'Tailwind CSS', 'JavaScript','React.js', 'Next.js', 'TypeScript'] },
  { icon: <FaNodeJs size={30} className="mb-2 text-success"/>, title: 'Backend', skills: ['Node.js', 'Express.js', 'REST API', 'Authentication', 'Authorization'] },
  { icon: <FaDatabase size={30} className="mb-2 text-warning"/>, title: 'Database', skills: ['MongoDB', 'Mongoose', 'SQL', 'Redis', 'Firebase'] },
  { icon: <FaDocker size={30} className="mb-2 text-primary"/>, title: 'DevOps', skills: ['Docker', 'AWS', 'CI/CD', 'Vercel', 'Netlify', 'Heroku'] },
  { icon: <FaGitAlt size={30} className="mb-2 text-danger"/>, title: 'Version Control', skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
  { icon: <FaTools size={30} className="mb-2 text-secondary"/>, title: 'Tools', skills: ['VS Code', 'Postman', 'Thunder Client','Figma' ] },
  { icon: <FaGlobe size={30} className="mb-2 text-info"/>, title: 'Web', skills: ['RESTful Services', 'Microservices', 'Responsive Design', 'Web Security'] },
  { icon: <FaBrain size={30} className="mb-2 text-light"/>, title: 'Other', skills: ['Problem Solving', 'Team Collaboration', 'Agile Methodology'] },
];


const Skills = () => {
  return (
    <Container className="py-5 skills-section-class" id="skills"> 
      <h2 className="text-center mb-5 display-5 fw-bold text-light">Technical <span className="text-primary">Expertise</span></h2>
      <div className="contact-heading-underline mx-auto" style={{marginTop:-30}}></div>
      <Row xs={1} sm={2} lg={4} className="g-4" style={{marginTop:20}}>
        {skillsData.map((category, index) => (
          <Col key={index}>
            <AnimatedCard delay={`${index * 0.1}s`}>
              <Card.Body>
                {category.icon}
                <Card.Title className="text-info fw-bold">{category.title}</Card.Title> 
                <div className="mt-3 d-flex flex-wrap justify-content-center"> 
                  {category.skills.map((skill, idx) => (
                    <StyledBadge key={idx} pill>
                      {skill}
                    </StyledBadge>
                  ))}
                </div>
              </Card.Body>
            </AnimatedCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;