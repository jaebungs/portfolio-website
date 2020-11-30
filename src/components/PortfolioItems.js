import React from 'react';

const PortfolioItems = (props) => {

    return (
        <div>
            <h3>Project</h3>
            <p>This is my project {props.match.params.id}</p>
        </div>
    )
}

export default PortfolioItems;