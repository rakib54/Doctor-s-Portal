import React from 'react';
import fluoride from '../../../images/Flouride.png'
import cavity from '../../../images/cavity.png'
import teeth from '../../../images/teeth.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';


const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth whitening',
        img: teeth
    }
]

const Services = () => {
    return (
        <section className='service-container mt-5'>
            <div className='text-center'>
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Service We provide</h2>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='w-75 row mt-5 pt-5'>
                    {
                        serviceData.map(service =><ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;