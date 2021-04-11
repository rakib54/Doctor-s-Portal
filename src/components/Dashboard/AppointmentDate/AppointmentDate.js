import React from 'react';

const AppointmentDate = ({appointments}) => {
    console.log(appointments);
    return (
        <div>
            <h1>Appointment :{appointments.length}</h1>
            {
                appointments.map(app =><li key={app._id}>{app.name}</li>)
            }
        </div>
    );
};

export default AppointmentDate;