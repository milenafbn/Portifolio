import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';
import { useTranslation } from '../context/useTranslation';


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'contribution' | 'personal'>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const t = useTranslation();
  const projects = t.projects.projects;

  const filteredProjects = 
    activeFilter === 'all'
      ? projects
      : activeFilter === 'contribution'
        ? projects.filter(project => project.contribution)
        : projects.filter(project => !project.contribution);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">{t.projects.title}</h2>
        
        <div className="projects-filter">
          <button 
        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
        onClick={() => setActiveFilter('all')}
          >
        Todos
          </button>

          <button 
        className={`filter-btn ${activeFilter === 'personal' ? 'active' : ''}`}
        onClick={() => setActiveFilter('personal')}
          >
        Pessoal
          </button>

          <button 
        className={`filter-btn ${activeFilter === 'contribution' ? 'active' : ''}`}
        onClick={() => setActiveFilter('contribution')}
          >
        Colaborações
          </button>
        </div>
        
        <div className="projects-scroll-container" style={{ maxHeight: '600px', overflowY: 'auto', paddingRight: '8px' }}>
          <motion.div 
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
          >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`project-card ${selectedProject === project.id ? 'expanded' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleProjectClick(project.id)}
            layoutId={`project-container-${project.id}`}
          >
            <Row className="project-content">
          <Col md={5} className="project-image-container">
            <motion.div className="project-image-wrapper" layoutId={`project-image-${project.id}`}>
              <img
                src={project.image ? project.image : '/projects_images/no-image.png'}
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/projects_images/no-image.png';
                }}
              />
            </motion.div>
          </Col>
          <Col md={7} className="project-info">
            <motion.h3 
              className="project-title"
              layoutId={`project-title-${project.id}`}
            >
              {project.title}
            </motion.h3>
            
            <motion.div 
              className="project-description"
              layoutId={`project-description-${project.id}`}
            >
              <p>{project.description}</p>
            </motion.div>
            
            <motion.div 
              className="project-technologies"
              layoutId={`project-technologies-${project.id}`}
            >
              {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">
              {tech}
            </span>
              ))}
            </motion.div>
            
            <motion.div 
              className="project-links"
              layoutId={`project-links-${project.id}`}
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
              {project.liveLink && (
            <a 
              href={project.liveLink} 
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
        </div>
      </Container>
    </section>
  );
};

export default Projects;