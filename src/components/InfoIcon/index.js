import React from 'react';
import './style.scss';
import { InfoIcon as IncoImage } from '../../assets/icons';

const InfoIcon = ({ content }) =>
    <span className="info-icon-wrapper">
        <IncoImage className="info-icon" />
        <span className="arrow-box left-arrow-box">
            {content}
        </span>
    </span>

export default InfoIcon;