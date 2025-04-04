import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';
import Education_card from '../components/education-card';
import photo from '../assets/photo3.jpeg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        
        <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            Sobre
        </motion.h2>
        <motion.div className="about-content"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    >
            <Row className="about-row">

                <Col md={8} className="about-text-col">
                    <div className="intro-text">
                        <p>Hi! My name is <span className="highlight">Milena</span> and I'm a <span className="highlight">software developer</span>.</p>
                        
                        <p>
                        I have experience in <span className="highlight">full-stack development</span>, especially 
                        with <span className="highlight">Laravel</span>, <span className="highlight">React</span>, and <span className="highlight">Spring Boot</span>, building applications 
                        that are both <span className="highlight">efficient</span> and <span className="highlight">user-friendly</span>. 
                        Currently, I work at the <span className="highlight">State Health Department</span>, where I 
                        develop and maintain systems that improve healthcare 
                        management.
                        </p>
                        
                        <p>
                        I also have experience with <span className="highlight">APIs</span>, <span className="highlight">AI</span>, relational and non-
                        relational databases, <span className="highlight">web design</span>, and <span className="highlight">mobile 
                        development</span> using <span className="highlight">Flutter</span>. Besides my job, I enjoy 
                        exploring new <span className="highlight">technologies</span>, working on personal 
                        projects, and collaborate to projects, such as <span className="highlight">Hema</span>, a 
                        mobile app I developed for managing treatments for 
                        leprosy.
                        </p>
                    </div>
                </Col>

                
                <Col md={4} className="profile-image-col">
                    <div className="profile-image-container">
                        <img src={photo} alt="Milena" className="profile-image" />
                    </div>
                </Col>
            </Row>
          
          <motion.div className="education-section"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      >
            <h2 className="section-title">Educação</h2>

            <Education_card title={'Bacharelado Interdisciplinar em Ciência e Tecnologia'} institution={'Universidade Federal do Maranhão'} period={'03/2021 - 12/2024'} />
            <Education_card title={'Engenharia da Computação'} institution={'Universidade Federal do Maranhão'} period={'03/2021 - 12/2026'} />
            
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;