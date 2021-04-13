import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import doctor from '../../../images/doctor.png'

const Doctor = () => {

    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={doctor} alt=""/>
            <h4>Dr. Coudi</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;