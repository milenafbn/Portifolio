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
  contribution: boolean;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'contribution' | 'personal'>('all');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const projects: Project[] = [

    {
      id: 'hans-plus',
      title: 'Hans+',
      description: 'Aplicativo mobile desenvolvido para o TCC, voltado para apoiar o tratamento de hanseníase. Conta com funcionalidades educativas e de acompanhamento do tratamento.',
      image: '/images/projects/hans-plus.png',
      technologies: ['Flutter', 'Dart', 'Android'],
      githubLink: 'https://github.com/seuusuario/hans-plus',
      contribution: true
    },
    {
      id: 'monitora-saude',
      title: 'Monitora Saúde',
      description: 'Painel de monitoramento de dados em saúde, utilizado por 217 municípios. Desenvolvido com foco em visualização de dados e usabilidade.',
      image: '/images/projects/monitora-saude.png',
      technologies: ['Laravel', 'PHP', 'JavaScript', 'PostgreSQL', 'Figma', 'Blade', 'HTML', 'CSS', 'Trello'],
      contribution: true
    },
    {
      id: 'geohosp',
      title: 'GeoHosp - Sistema de Gestão Hospitalar',
      description: 'Sistema completo para gestão de hospitais, incluindo módulos de refeições, exames e consultas. Projeto colaborativo focado em otimização de processos internos.',
      image: '/images/projects/geohosp.png',
      technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
      githubLink: 'https://github.com/seuusuario/geohosp',
      contribution: true
    },
    {
      id: 'renaveh',
      title: 'Renaveh',
      description: 'Sistema centralizado para gestão de pacientes e notificações de saúde. Projeto colaborativo com foco em organização e rastreamento de informações clínicas.',
      image: '/images/projects/renaveh.png',
      technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
      githubLink: 'https://github.com/seuusuario/renaveh',
      contribution: true
    },
    {
      id: 'gerenciador-viagens',
      title: 'Gerenciador de Viagens',
      description: 'API REST desenvolvida em Java com Spring Boot para gerenciar viagens e destinos, com foco em escalabilidade e boas práticas de desenvolvimento backend.',
      image: '/images/projects/gerenciador-viagens.png',
      technologies: ['Java', 'Spring Boot'],
      githubLink: 'https://github.com/seuusuario/gerenciador-viagens',
      contribution: false
    },
    {
      id: 'ml-bankmarketing',
      title: 'Projeto de Machine Learning - Bank Marketing',
      description: 'Solução de machine learning utilizando o dataset Bank Marketing para prever respostas de clientes em campanhas bancárias. Inclui pré-processamento, validação cruzada e avaliação de modelos.',
      image: '/images/projects/ml-bankmarketing.png',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Matplotlib'],
      githubLink: 'https://github.com/seuusuario/bankmarketing-ml',
      contribution: true
    },
    {
      id: 'cadserv',
      title: 'Cadserv',
      description: 'Sistema de gerenciamento de funcionários para controle de dados pessoais, férias, escolaridade e lotação. Projeto colaborativo.',
      image: '/images/projects/cadserv.png',
      technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
      githubLink: 'https://github.com/seuusuario/cadserv',
      contribution: true
    },
    {
      id: 'primeira-infancia-sem-fome',
      title: 'Primeira Infância Sem Fome',
      description: 'Sistema de gerenciamento de dados de funcionários em projetos sociais, incluindo cadastro, férias e escolaridade. Projeto colaborativo.',
      image: '/images/projects/primeira-infancia.png',
      technologies: ['Laravel', 'Blade', 'MySQL', 'PHP', 'JavaScript', 'Bootstrap', 'MVC', 'Git', 'Trello'],
      githubLink: 'https://github.com/seuusuario/primeira-infancia-sem-fome',
      contribution: true
    },
    {
      id: 'intelligent-snake-solver',
      title: 'Intelligent Snake Solver',
      description: 'Agente inteligente que utiliza o algoritmo A* para resolver automaticamente uma versão do jogo Snake. Projeto acadêmico de IA baseado em objetivos.',
      image: '/images/projects/snake-solver.png',
      technologies: ['Python', 'Pygame', 'Algoritmo A*'],
      githubLink: 'https://github.com/seuusuario/intelligent-snake-solver',
      contribution: false
    },
    {
      id: 'mario-game',
      title: 'Mario Game',
      description: 'Jogo arcade inspirado no clássico Mario, desenvolvido utilizando JavaScript e HTML5 Canvas. Possui animações, obstáculos e sistema de pontuação.',
      image: '/images/projects/mario-game.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Canvas'],
      githubLink: 'https://github.com/seuusuario/mario-game',
      contribution: false
    }
  ];

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
        <h2 className="section-title">Projetos e colaborações</h2>
        
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
        
        <div style={{ maxHeight: '600px', overflowY: 'auto', paddingRight: '8px' }}>
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
        </div>
      </Container>
    </section>
  );
};

export default Projects;