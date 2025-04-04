import React from 'react';
import '../styles/Education_card.css';

interface EducationCardProps {
    title: string;
    institution: string;
    period: string;
}

const Education_card: React.FC<EducationCardProps> = ({title, institution, period}) => {
  return (
    <div className="education-card">
        <div className="education-details">
        <h3>{title}</h3>
        <p className="institution">{institution}</p>
        </div>
        <div className="education-period">
        <p>{period}</p>
        </div>
    </div>
  );
};

export default Education_card;