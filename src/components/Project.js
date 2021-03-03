import React from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';

const Project = () => {
    return (
        <section className="project-section">
            <ProjectInfoCard title="Mymy cocktails" code={'https://github.com/jaebungs/MyMy-Cocktails'} techs={['React', 'Redux', 'MongoDB', 'Express', 'MaterialUI']} color='dark-green' description='Simple and fun cocktail recipe finder that includes the ability to create an account and save favourite recipes.'/>
            <ProjectInfoCard title="Masonry generator" code={'https://github.com/jaebungs/MyMy-Cocktails'} techs={['React', 'Firebase', 'SCSS']} color='dark-pink' description='Mansory gallery generator that includes modal extend view, drag and drop order change and multiple image upload and delete.'/>       
        </section>
    )
}

export default Project
