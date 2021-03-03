import React, { Fragment } from 'react';
import {useTrail, animated} from 'react-spring';

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 8, tension: 1200, friction: 300 },
        opacity: open ? 1 : 0,
        from: { opacity: 0, x: 0, height: 0 }
      })
//interpolate helper function allows you to take multiple animatedValues and form one interpolation result
  return (
      <Fragment>
          {trail.map(({x, height, ...rest}, index)=>{
              return (
                  <animated.div
                    key={items[index]+index}
                    className="trails--text"
                    style={{ ...rest, transform: `translate3d(0, 0, 0` }}>
                      {items[index]}
                  </animated.div>
              )
          })}
      </Fragment>
  )
};

export default Trail;
