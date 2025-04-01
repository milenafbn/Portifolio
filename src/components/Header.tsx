import React from 'react';
import '../styles/Header.css'
import Logo from '../assets/{ M }.svg';
import SwitchLanguage from './SwitchLanguage';
import { Switch } from "antd";

const Header: React.FC = () => {

    return (
        <header className="header">
            <div className="logo" style={{ width: '120px' }}>
                <img src={Logo} alt="" style={{ width: '100%', height: '100%' }} />
            </div>
            <nav className="nav">
                <a href="#about">Sobre</a>
                <a href="#skills">Habilidades</a>
                <a href="#experience">Experiência</a>
                <a href="#projects">Projetos</a>
            </nav>
            <div className="toggleButton" >
            <span style={{marginRight:'10px'}}>EN</span>
            <SwitchLanguage/>
            <span style={{marginLeft:'10px'}}>PT</span> 
            {/* #feafbeba */}
            </div>
        </header>
    );
};

export default Header;