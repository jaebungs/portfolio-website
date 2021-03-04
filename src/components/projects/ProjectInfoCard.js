import React from 'react';
import TechChips from '../../hook/TechChips';

const ProjectInfoCard = ({title, code, techs, color, description}) => {
  return (
    <div className="project flex--column-start">
      <h2 className="project__title">{title}</h2>
      <p className="description-typography">{description}</p>
      <TechChips techs={techs} color={color} />
      <button className="case-study-btn">VIEW CASE STUDY</button>
    </div>
  );
};

export default ProjectInfoCard;
