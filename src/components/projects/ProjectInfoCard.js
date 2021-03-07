import React from 'react';
import TechChips from '../../helper/TechChips';

const ProjectInfoCard = ({setIsOpen, title, code, techs, color, description}) => {

  return (
    <div className="project flex--column-start">
      <h2 className="project__title">{title}</h2>
      <p className="description-typography">{description}</p>
      <TechChips techs={techs} color={color} />
      <div className="project-btn-container">
        <button onClick={()=>setIsOpen(true)} className="project-btn-container__button">CASE STUDY</button>
        <button onClick={()=>window.open(code, '_blank')} className="project-btn-container__button">DEMO</button>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
