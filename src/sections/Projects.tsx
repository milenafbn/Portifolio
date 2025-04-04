import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  featured: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured'>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      id: 'gerenciador-viagens',
      title: 'Gerenciador de Viagens',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec cursus ipsum, ut mollis lacus. Sed et nunc fermentum massa lobortis tempor. Nulla nec porta nibh. Nam et quam et purus lacinia finibus. Fusce oro quam, fringilla eu tempus id, congue sit amet arcu. Aenean non turpis non augue pulvinar gravida at est felis.',
      image: '/images/projects/gerenciador-viagens.png', // Substitua pelo caminho real da imagem
      technologies: ['Java', 'Spring Boot'],
      githubLink: 'https://github.com/seuusuario/gerenciador-viagens',
      featured: true
    },
    {
      id: 'sistema-hospitalar',
      title: 'Sistema Hospitalar',
      description: 'Um sistema completo para gerenciamento de hospital, incluindo módulos de agendamento, prontuário eletrônico e gestão de medicamentos. Desenvolvido com foco em usabilidade e segurança de dados.',
      image: '/images/projects/sistema-hospitalar.png',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      githubLink: 'https://github.com/seuusuario/sistema-hospitalar',
      liveLink: 'https://sistema-hospitalar-demo.com',
      featured: true
    },
    {
      id: 'app-delivery',
      title: 'Aplicativo de Delivery',
      description: 'Aplicativo móvel para entrega de produtos com rastreamento em tempo real, sistemas de avaliação e integração com múltiplos meios de pagamento.',
      image: '/images/projects/app-delivery.png',
      technologies: ['Flutter', 'Dart', 'Firebase'],
      githubLink: 'https://github.com/seuusuario/app-delivery',
      featured: false
    }
    // Adicione mais projetos conforme necessário
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId === selectedProject ? null : projectId);
  };

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title">Projetos e colaborações</h2>
        
        <div className="projects-filter">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'featured' ? 'active' : ''}`}
            onClick={() => setActiveFilter('featured')}
          >
            Destaques
          </button>
        </div>
        
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
                      src={project.image}
                      alt={project.title}
                      className="project-image"
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
      </Container>
    </section>
  );
};

export default Projects;