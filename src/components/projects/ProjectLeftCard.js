import React from 'react';

const ProjectLeftCard = ({title, source, code, demo, techs}) => {
  const handleVideoPlay = (e) => {
    e.currentTarget.play();
  };
  return (
    <article className="project flex--start">
      <div>
        <video onMouseOver={handleVideoPlay} loop muted className="project-video">
          <source src={source} type="video/mp4" />
        </video>
      </div>
      <div className="project__info">
        <h2 className="project__title">{title}</h2>
        <div className="project__button-container">
            <a href={code}><button className="project__button">Code</button></a>
            <a href={demo}><button className="project__button">Demo</button></a>
        </div>

        <div>
        {techs.map((tech, index)=>{
            return <div key={tech+'stackKey'+index} className={'techChip ' + tech}>{tech}</div>
        })}
        </div>
        
      </div>
    </article>
  );
};

export default ProjectLeftCard;
