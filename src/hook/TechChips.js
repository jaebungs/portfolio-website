import React from 'react'

const TechChips = ({techs, color}) => {
    return (
        <div className="tech-container flex--start">
            {techs.map((tech)=>{
                return <div className={`tech-container__chip ${color}`}>{tech}</div>
            })}
        </div>
    )
}

export default TechChips
