import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 col-sm-12 col-12 text-white info-Card">
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div className='ms-3'>
                    <FontAwesomeIcon className="InfoIcon" icon={info.icon}></FontAwesomeIcon>
                </div>
                <div className='ms-3'>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;