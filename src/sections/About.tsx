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
                  <p>
                    Olá! Me chamo Milena Neves, <span className="highlight">desenvolvedora de software</span> com formação em <span className="highlight">Ciência e Tecnologia</span> e atualmente estudante de <span className="highlight">Engenharia da Computação</span>.
                    Tenho experiência no desenvolvimento de aplicações <span className="highlight">web</span> e <span className="highlight">mobile</span>, 
                    com foco em <span className="highlight">back-end</span>, utilizando tecnologias como <span className="highlight">Laravel</span>, <span className="highlight">Spring Boot</span>, <span className="highlight">React</span> e <span className="highlight">Flutter</span>.
                  </p>

                  <p>
                    Atuo em todas as etapas do <span className="highlight">ciclo de desenvolvimento de software</span> desde a <span className="highlight">modelagem de dados</span> até a implementação de <span className="highlight">funcionalidades</span> e  <span className="highlight">interfaces</span>. Embora meu foco principal seja o <span className="highlight">back-end</span>, 
                    gosto de criar e aprimorar o <span className="highlight">design</span> das aplicações sempre que necessário, 
                    buscando entregar soluções <span className="highlight">completas</span>, <span className="highlight">funcionais</span> e com <span className="highlight"> boa experiência para o usuário</span>.
                  </p>

                  <p>
                    Atualmente, estou buscando me aprofundar em <span className="highlight">arquitetura de software</span> e <span className="highlight">inteligência artificial</span>. Gosto de <span className="highlight">trabalhar em equipe,</span> <span className="highlight">aprender novas tecnologias</span> e enfrentar <span className="highlight">desafios</span> que me façam 
                    crescer como profissional e como pessoa.
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