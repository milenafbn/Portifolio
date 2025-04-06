import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Projects.css';

const Projects: React.FC = () => {

  const { textos } = useLanguage();
  const projects = textos.Projects;

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };


  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">{textos.ProjectsTitle}</h2>
        
        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${selectedProject === project.title ? 'expanded' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project.title)}
              layoutId={`project-container-${index}`}
            >
              <Row className="project-content">
                <Col md={5} className="project-image-container">
                  <motion.div className="project-image-wrapper" layoutId={`project-image-${project.title}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </motion.div>
                </Col>
                <Col md={7} className="project-info">
                  <motion.h3 
                    className="project-title"
                    layoutId={`project-title-${project.title}`}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="project-description"
                    layoutId={`project-description-${project.title}`}
                  >
                    <p>{project.description}</p>
                  </motion.div>
                  
                  <motion.div 
                    className="project-technologies"
                    layoutId={`project-technologies-${project.title}`}
                  >
                    {project.techs.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  
                  <motion.div 
                    className="project-links"
                    layoutId={`project-links-${project.title}`}
                  >
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> Código
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt /> Demo
                      </a>
                    )}
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;