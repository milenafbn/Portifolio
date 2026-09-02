import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';
import Education_card from '../components/education-card';
import SectionTitle from '../components/SectionTitle';
import photo from '../assets/photo.jpeg';
import { motion } from 'framer-motion';
import { useTranslation } from '../context/useTranslation';


const About = () => {
  const t = useTranslation();
  
  return (
    <section id="about" className="about-section">
      <Container>
        
        <SectionTitle>{t.about.title}</SectionTitle>
        <motion.div className="about-content"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    >
            <Row className="about-row">

                <Col md={8} className="about-text-col">
                <div className="intro-text">
                  <p dangerouslySetInnerHTML={{ __html: t.about.texto1 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: t.about.texto2 }}></p>
                  <p dangerouslySetInnerHTML={{ __html: t.about.texto3 }}></p>
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
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                      >
            <SectionTitle>{t.about.educacao}</SectionTitle>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
            >
              <Education_card title={t.about.graduacao1} institution={'Universidade Federal do Maranhão'} period={'03/2021 - 12/2024'} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Education_card title={t.about.graduacao2} institution={'Universidade Federal do Maranhão'} period={'03/2021 - 12/2026'} />
            </motion.div>

          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;