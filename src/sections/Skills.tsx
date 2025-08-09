import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Skills.css';
import { useTranslation } from '../context/useTranslation';

const Skills = () => {
    const t = useTranslation();

    const skillsData = {
        languages: ["Java", "PHP", "TypeScript", "Python", "Dart", "JavaScript", "C"],
        frontend: ["HTML", "CSS", "React", "Bootstrap"],
        backend: ["Laravel", "Spring Boot", "Flutter", "NestJS"],
        databases: ["MySQL", "PostgreSQL", "Firebase"],
        tools: ["Git", "Trello", "Figma", "Jira"]
    };
    
    return (
        <section id="skills" className="skills-section">
            <Container>
                <h2 className="section-title">{t.skills.title}</h2>

                    
                <Row className="skill-categories">
                    <Col lg={4} md={6} className="skill-category">
                        <div className="skill-category-card">
                        <h3 className="category-title">{t.skills.linguagens}</h3>
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
                        <h3 className="category-title">{t.skills.Banco}</h3>
                        <div className="skill-tags">
                            {skillsData.databases.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                            ))}
                        </div>
                        </div>
                    </Col>

                    <Col lg={4} md={6} className="skill-category">
                        <div className="skill-category-card">
                        <h3 className="category-title">{t.skills.ferramentas}</h3>
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