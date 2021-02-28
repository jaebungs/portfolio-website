import React, {useState, useEffect} from 'react';
import Trail from '../hook/Trail';

const Landing = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <section className="landing-section">
      <div className="landing__text flex--column--left">
        <Trail open={open} className="trail-container">
          <p>Hi,</p>
          <p>
            I'm <span className="bold-typography">Jae Park.</span>
          </p>
          <p className="bold-typography">Front-end Developer</p>
          <p>Love problem solving and creating.</p>
        </Trail>
      </div>
    </section>
  );
};

export default Landing;
