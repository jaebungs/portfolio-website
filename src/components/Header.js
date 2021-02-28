import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="flex--end">
        <nav className="nav">
          <ul className="nav__list">
            <li><a className="nav__item" href="#about">About</a></li>
            <li><a className="nav__item" href="#Project">Project</a></li>
            <li><a className="nav__item" href="#Project">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
