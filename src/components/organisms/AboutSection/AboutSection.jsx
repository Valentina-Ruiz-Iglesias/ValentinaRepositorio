import React from 'react';
import SkillItem from '../../molecules/SkillItem/SkillItem';

const AboutSection = () => (
    <div className="section">
        <h2>Sobre Mí</h2>

        <div className="about-content">
            <div className="about-text">
                <p>
                    Me encuentro estudiando ingeniería en Informática, me gusta la ciberseguridad
                    y el desarrollo frontend. Mi meta es contribuir a la creacion de
                    soluciones tecnologicas seguras, funcionales y amigables que ayuden y contribuyan
                    a la sociedad y al medioambiente.
                </p>
            </div>

            <div className="skills-section">
                <h3>Tecnologías &amp; Lenguajes</h3>
                <div className="skills-grid">
                    <SkillItem name="HTML" levelClass="html" />
                    <SkillItem name="CSS" levelClass="css" />
                    <SkillItem name="JavaScript" levelClass="javascript" />
                    <SkillItem name="Python" levelClass="python" />
                    <SkillItem name="Kotlin" levelClass="kotlin" />
                </div>
            </div>

            <div className="interests-section">
                <h3>Áreas de Interés</h3>
                <div className="interests-tags">
                    <span className="interest-tag">Ciberseguridad</span>
                    <span className="interest-tag">Frontend Development</span>
                    <span className="interest-tag">Desarrollo Mobile</span>
                    <span className="interest-tag">UX/UI Design</span>
                </div>
            </div>
        </div>
    </div>
);

export default AboutSection;
