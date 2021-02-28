import React from 'react';

const ProjectCustomCard = ({title, source, code, demo, button}) => {

    const handleVideoPlay = (e) => {
        e.currentTarget.play();
    }

    return (
        <article className="project-container">
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
