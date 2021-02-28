import React from 'react';
// import MymyCoctailsLanding from '../../files/mymycocktails-landing.png';
import MymyCocktails from '../../files/mymyCocktails.mp4';

const Cocktails = () => {
    return (
        <article className="project-container">
            <h1>MyMy Cocktails</h1>
            <div>
                {/* <img className="project-image" src={MymyCoctailsLanding} alt='mymy-cocktail landing page' /> */}
                <video
                    autoPlay
                    loop
                    muted
                    className="project-video"
                >
                    <source src={MymyCocktails} type="video/mp4" />
                </video>
            </div>

        </article>
    )
}

export default Cocktails
