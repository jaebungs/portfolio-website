import React from 'react';
import ProjectRightCard from './projects/ProjectRightCard';
import ProjectLeftCard from './projects/ProjectLeftCard';
import MymyCocktails from '../files/mymyCocktails.mp4';
import MasonryVideo from '../files/masonry-video.mp4';


const Project = () => {
    return (
        <section className="project-section">
            <ProjectRightCard title="Mymy Cocktails" source={MymyCocktails} code={'https://github.com/jaebungs/MyMy-Cocktails'} demo={'https://mymycocktails.netlify.app/'} techs={['React', 'Redux', 'MongoDB', 'Express', 'MaterialUI']}/>
            
            <ProjectLeftCard title="Masonry Generator" source={MasonryVideo} code={'https://github.com/jaebungs/gallery-with-admin'} demo={'https://commongooods-1609187154790.web.app/'} techs={['React', 'Firebase', 'SCSS']}/>
        </section>
    )
}

export default Project
