import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Skills.css';

const Skills = () => {

  const skillsData = {
    languages: ["Java", "PHP", "TypeScript", "Python", "Dart", "JavaScript", "C"],
    frontend: ["HTML", "CSS", "React", "Bootstrap"],
    backend: ["Laravel", "Spring Boot", "Flutter"],
    databases: ["MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git", "Trello", "Figma", "Jira"]
  };
  
  return (
    <section id="skills" className="skills-section">
        <Container>
            <h2 className="section-title">Skills</h2>

                
            <Row className="skill-categories">
                <Col lg={4} md={6} className="skill-category">
                    <div className="skill-category-card">
                    <h3 className="category-title">Linguagens</h3>
                    <div className="skill-tags">
                        {skillsData.languages.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                    </div>
                </Col>
                
                <Col lg={3} md={6} className="skill-category">
                    <div className="skill-category-card">
                    <h3 className="category-title">Frontend</h3>
                    <div className="skill-tags">
                        {skillsData.frontend.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                    </div>
                </Col>
                
                <Col lg={4} md={6} className="skill-category">
                    <div className="skill-category-card">
                    <h3 className="category-title">Backend</h3>
                    <div className="skill-tags">
                        {skillsData.backend.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                    </div>
                </Col>
                
                <Col lg={3} md={6} className="skill-category">
                    <div className="skill-category-card">
                    <h3 className="category-title">Bancos de Dados</h3>
                    <div className="skill-tags">
                        {skillsData.databases.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                    </div>
                </Col>

                <Col lg={4} md={6} className="skill-category">
                    <div className="skill-category-card">
                    <h3 className="category-title">Ferramentas</h3>
                    <div className="skill-tags">
                        {skillsData.tools.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Skills;