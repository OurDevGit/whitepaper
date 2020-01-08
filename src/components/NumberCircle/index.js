import React from 'react';
import './style.scss';
import { InfoIcon as IncoImage } from '../../assets/icons';

const NumberCircle = ({ content, number}) =>
    <span className="Number-icon-wrapper">
        <a className="Number-icon" />{number}
        <span className="arrow-box left-arrow-box">
            {content}
        </span>
    </span>

export default NumberCircle;