import React from 'react';
import PropTypes from 'prop-types';


const CurrentScore = (props) => {
    const scoreStyle = {
        fontFamily: '',
        fontsize: 90,
        fill: 'd6d33e',
    };

    return (
        <g >
            <text style={scoreStyle} x='400' y='50'>
                {props.score}
            </text>
        </g> 
    );
};

CurrentScore.propTypes = {
    score: PropTypes.number.isRequired,
};

export default CurrentScore;