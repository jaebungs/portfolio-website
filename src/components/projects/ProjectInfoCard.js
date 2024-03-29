import React from 'react';
import TechChips from '../../helper/TechChips';

const rednerCaseStudy = (setIsOpen, color, title) => {
  if (setIsOpen) {
    return <button onClick={() => setIsOpen(true)} className={`project-btn-container__button ${color}-btn`} aria-label={`${title} case study button`}>
    CASE STUDY
  </button>
  } else {
    return 
  }
}

const ProjectInfoCard = ({setIsOpen, title, demo, techs, color, description}) => {
  return (
    <div className="project flex--column-start">
      <h2 className="project__title">{title}</h2>
      <p className="description-typography">{description}</p>
      <TechChips techs={techs} color={color} />
      <div className="project-btn-container">
        { rednerCaseStudy(setIsOpen, color, title) }
        <button
          onClick={() => window.open(demo, '_blank')}
          className={`project-btn-container__button ${color}-btn`}
          aria-label={`${title} demo button`}
        >
          DEMO
        </button>
      </div>
    </div>
  );
};

export default ProjectInfoCard;
