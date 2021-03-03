import React from 'react'

const illustrators = () => {
    const screenWidth = window.screen.width - 17;

    return (
        <svg
        width={screenWidth}
        preserveAspectRatio="xMidYMid meet"
        height="152"
        viewBox={`0 0 ${screenWidth} 152`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lines"
        >
      <path
        d={`M1 88.7522L448 151L1142 24.5L1376 64L${screenWidth} 88.7522L1054 151L680 1L367 45.5245L1 88.7522Z`}
        stroke="white"
      />
    </svg>
    )
}

export default illustrators
