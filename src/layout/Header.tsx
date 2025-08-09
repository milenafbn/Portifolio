import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/{ M }.svg';
import SwitchLanguage from '../components/SwitchLanguage';
import '../styles/Header.css'; // Mantenha seus estilos personalizados
import { useTranslation } from '../context/useTranslation';


function Header() {
  const t = useTranslation();

  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto custom-nav">
            <Nav.Link href="#about" className="custom-nav-link">{t.about.title}</Nav.Link>
            <Nav.Link href="#skills" className="custom-nav-link">{t.skills.title}</Nav.Link>
            <Nav.Link href="#experience" className="custom-nav-link">{t.experience.title}</Nav.Link>
            <Nav.Link href="#projects" className="custom-nav-link">{t.projects.title}</Nav.Link>
          </Nav>
          <div className="language-toggle">
            <span>PT</span>
            <SwitchLanguage />
            <span>EN</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;