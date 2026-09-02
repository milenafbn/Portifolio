import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/Skills.css';
import SectionTitle from '../components/SectionTitle';
import { useTranslation } from '../context/useTranslation';

const Skills = () => {
    const t = useTranslation();

    const categories = [
        { title: t.skills.linguagens, skills: ["Java", "PHP", "TypeScript", "Python", "Dart", "JavaScript", "C"], lg: 4 },
        { title: "Frontend", skills: ["HTML", "CSS", "React", "Bootstrap"], lg: 3 },
        { title: "Backend", skills: ["Laravel", "Spring Boot", "Flutter", "NestJS"], lg: 4 },
        { title: t.skills.Banco, skills: ["MySQL", "PostgreSQL", "Firebase"], lg: 3 },
        { title: t.skills.ferramentas, skills: ["Git", "Trello", "Figma", "Jira"], lg: 4 },
    ];

    return (
        <section id="skills" className="skills-section">
            <Container>
                <SectionTitle>{t.skills.title}</SectionTitle>

                <Row className="skill-categories">
                    {categories.map((category, index) => (
                        <Col key={category.title} lg={category.lg} md={6} className="skill-category">
                            <motion.div
                                className="skill-category-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <span className="card-dots" aria-hidden="true"><i></i><i></i><i></i></span>
                                <h3 className="category-title">{category.title}</h3>
                                <div className="skill-tags">
                                    {category.skills.map((skill) => (
                                        <span key={skill} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;
