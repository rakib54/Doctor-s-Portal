import React from 'react';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h2 className="text-brand text-center">Appointment</h2>
            {
                appointments.length ?
                <AppointmentShortList appointments={appointments} key={appointments._id}></AppointmentShortList>
                :
                <div className=" p-5">
                    <h4 className="lead text-center">There is no Appointments for this date</h4>
                </div>
            }
            

            
            
        </div>
    );
};

export default AppointmentDate;