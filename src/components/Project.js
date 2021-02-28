import React from 'react';
// import Cocktails from './projects/Cocktails';
import ProjectCustomCard from './projects/ProjectCustomCard';
import MymyCocktails from '../files/mymyCocktails.mp4';

const Project = () => {
    return (
        <section>
            <ProjectCustomCard title="Mymy Cocktails" source={MymyCocktails} />
            {/* <Cocktails /> */}
        </section>
    )
}

export default Project
