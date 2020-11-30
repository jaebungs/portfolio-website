import React from "react";
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>Check out my work:</p>
        <Link to="/portfolio/1">
            Portfolio 1
        </Link>
        <Link to="/portfolio/2">
            Portfolio 2
        </Link>
        <Link to="/portfolio/3">
            Portfolio 3
        </Link>
    </div>
)
    


export default PortfolioPage;