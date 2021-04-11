import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const InfoData = [
    {
        title: 'Opening hours',
        description: 'We are open at 7 days and 24 hours',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Uttara,Dhaka 1260,Bangladesh',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '01779545426',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className='w-75 row'>
                {
                    InfoData.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;