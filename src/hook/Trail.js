import React, { Fragment } from 'react';
import {useTrail, animated} from 'react-spring';

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 2, tension: 1900, friction: 300 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 10 : 0,
        from: { opacity: 0, x: 20, height: 0 }
      })
//interpolate helper function allows you to take multiple animatedValues and form one interpolation result
  return (
      <Fragment>
          {trail.map(({x, height, ...rest}, index)=>{
              return (
                  <animated.div
                    key={items[index]+index}
                    className="trails--text"
                    style={{ ...rest, transform: `translate3d(0, ${x}px)` }}>
                   {items[index]}
                  </animated.div>
              )
          })}
      </Fragment>
  )
};

export default Trail;
