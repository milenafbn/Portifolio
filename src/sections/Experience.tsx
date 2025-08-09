import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Experience.css';
import { useTranslation } from '../context/useTranslation';


const Experience = () => {
  const t = useTranslation();
  const experiences = t.experience.experiences;


  const [selectedExp, setSelectedExp] = useState<string>(experiences[0].id);

  const handleExpChange = (expId: string) => {
    setSelectedExp(expId);
  };

  const currentExp = experiences.find(exp => exp.id === selectedExp) || experiences[0];

  return (
    <section id="experience" className="experience-section">
      <Container>
        <h2 className="section-title">{t.experience.title}</h2>
        
        <Row className="experience-container">
          <Col md={4} className="companies-list">
            {experiences.map((exp) => (
              <div 
                key={exp.id}
                className={`company-item ${selectedExp === exp.id ? 'active' : ''}`}
                onClick={() => handleExpChange(exp.id)}
              >
                <span className="company-name">{exp.company}</span>
                {selectedExp === exp.id && <div className="active-indicator"></div>}
              </div>
            ))}
          </Col>
          
          <Col md={8} className="experience-details">
            <AnimatePresence mode="wait">
              <motion.div 
                key={selectedExp}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="experience-content"
              >
                <div className="experience-header">
                  <h3 className="role-title">{currentExp.role}</h3>
                  <span className="company-location">{currentExp.shortName}</span>
                </div>
                
                <p className="experience-period">{currentExp.period}</p>
                
                <ul className="responsibilities-list">
                  {currentExp.responsibilities.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="responsibility-item"
                    >
                      <span className="bullet"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;