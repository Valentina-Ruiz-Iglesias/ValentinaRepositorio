import React from 'react';

const SkillItem = ({ name, levelClass }) => (
    <div className="skill-item">
        <span className="skill-name">{name}</span>
        <div className="skill-bar">
            <div className={`skill-level ${levelClass}`} />
        </div>
    </div>
);

export default SkillItem;
