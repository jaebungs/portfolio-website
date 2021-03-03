import React from 'react';

const ProjectCustomCard = ({title, source, code, demo, techs}) => {

    const handleVideoPlay = (e) => {
        e.currentTarget.play();
    }

    return (
        <article className="project flex--end">
            <div className="project__info">
                <h2 className="project__title">{title}</h2>
                {/* <div className="project__button-container">
                    <a href={code} className="project__button">Code</a>
                    <a href={demo} className="project__button">Demo</a>
                </div> */}
                <div className="project__stacks">
                    {techs.map((tech, index)=>{
                        return <div key={tech+'stackKey'+index} className={'techChip ' + tech}>{tech}</div>
                    })}
                </div>
            </div>
            <div >
                <video
                    onMouseOver={handleVideoPlay}
                    loop
                    muted
                    className="project-video"
                >
                    <source src={source} type="video/mp4" />
                </video>
            </div>
        </article>
    )
}

export default ProjectCustomCard
