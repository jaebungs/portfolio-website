import React from 'react';
import ProjectInfoCard from './projects/ProjectInfoCard';
import zipGateImg from '../files/ct-image.png';
import inventoryImg from '../files/ct-inventory.png';
import {ParallaxLayer} from 'react-spring/renderprops-addons';

const CT = () => {

  return (
    <section className="project-section">
      <article className="project-section__right-article responsive-reverse-column">
        <ProjectInfoCard
          title="Enhanced Dealer Search"
          demo={'https://www.bmwusa.com/inventory.html'}
          techs={['Vue', 'VueX', 'Graphql', 'CSS']}
          color="dark-pink"
          description="Implemented new API and UIs that enabling users to view new and used inventory on a selected dealership."
        />
        <div className="project-section__right-image">
          {/* relative position wrapper div to responsively keep the green cirlce on the same position. */}
          <ParallaxLayer className="parallaxLayer__project--image" offset={0} speed={0.1}>
            <img
              className="zipgate-image responsive-image"
              src={zipGateImg}
              alt="Dealership search example screenshot"
            />
          </ParallaxLayer>
          <ParallaxLayer className="parallaxLayer__project--background z-middle" offset={0} speed={0.2}>
            <img className="inventory-image" src={inventoryImg} alt="BMW Inventory page image"/>
          </ParallaxLayer>
          <ParallaxLayer className="parallaxLayer__project--background z-lowest" offset={0} factor={0.3}  speed={0.3}>
            <div className="pink-circle"></div>
          </ParallaxLayer>
        </div>
      </article>
    </section>
  );
};

export default CT;
