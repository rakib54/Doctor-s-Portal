import React, { useState } from 'react';
import Calendar from 'react-calendar';
import AppointmentDate from '../AppointmentDate/AppointmentDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { useEffect } from 'react';


const Dashboard = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appointments, setAppointments] = useState([])
    const handleDateChange = (date) => {
        setSelectedDate(date);

    }

    useEffect(()=>{
        fetch('http://localhost:5000/addAppointmentByDate', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ date:selectedDate })
        })
            .then(res => res.json())
            .then(data => {
                setAppointments(data);
            })
    },[selectedDate])

    return (
        <section>
            <div className="container fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5">
                    <Calendar className="border-0"
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-5">
                    <AppointmentDate appointments={appointments}></AppointmentDate>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;