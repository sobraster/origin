import React from 'react';
import { pathFromBezierCurve} from '../utils/formulas'


const CannonBase = (props) => {
    const cannonBaseStyle = {
        fill: '#a16012',
        srtoke: '#75450e',
        strokeWidth: '2px',
    };

    const basewWidth = 80;
    const halfBase = basewWidth / 2;
    const height = 60;
    const negatibeHeight = height * -1;

    const cubicBezierCurve = {
        initialAxis: {
            x: -halfBase,
            y: height,
        },
        initialControlPoint: {
            x: 20,
            y: negatibeHeight,
        },
        endingControlPoinr: {
            x: 60,
            y: negatibeHeight,
        },
        endingAxis: {
            x: basewWidth,
            y: 0,
        },
        
    };

    return (
        <g>
            <path
                style = {cannonBaseStyle}
                d = {pathFromBezierCurve(cubicBezierCurve)}
            />
            <line
                x1 = {-halfBase}
                y1 = {height}
                x2 = {halfBase}
                y2 = {height}
            />
        </g>
    );
};

export default CannonBase;
