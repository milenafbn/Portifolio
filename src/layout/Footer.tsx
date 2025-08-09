import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css'; 

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-content">
          <div className="social-links-footer">
            <a href="https://github.com/milenafbn" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/milena-neves-227739223/" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
              <FaLinkedin />
            </a>
            <a href="mailto:milena.neves.dev@gmail.com" className="social-icon-footer">
              <FaEnvelope />
            </a>
            {/* <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
              <FaWhatsapp />
            </a> */}
          </div>
          
          <div className="copyright">
            <p>© 2024 Milena Neves</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;