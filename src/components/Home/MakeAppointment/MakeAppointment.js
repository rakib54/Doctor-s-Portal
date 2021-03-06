import React from 'react';
import './MakeAppointment.css'
import doctor from '../../../images/doctor.png'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary">APPOINTMENT</h5>
                        <h1 className="my-4">Make An Appointment <br/> Today</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate unde incidunt magni.</p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;