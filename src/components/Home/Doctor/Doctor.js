import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
// import doctor from '../../../images/doctor.png'

const Doctor = ({doc}) => {
    
    return (
        <div className="col-md-4 col-sm-6 text-center">
            <img style={{height:'200px'}} className="img-fluid mb-3" src={`http://localhost:5000/${doc.img}`} alt=""/>
            <h4>{doc.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctor;