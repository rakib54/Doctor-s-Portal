import React from 'react';
import BookingCard from '../BookingCard/BookingCard'

const BookingData = [
    {
        id:1,
        subject:'Teeth Orthodontics',
        visitingHour:'8.00AM to 9.00AM',
        totalSpace:'10'
    },
    {
        id:2,
        subject:'Cosmetic Dentistry',
        visitingHour:'9.00AM to 10.00AM',
        totalSpace:'10'
    },
    {
        id:3,
        subject:'Teeth cleaning',
        visitingHour:'10.00AM to 11.00AM',
        totalSpace:'10'
    },
    {
        id:4,
        subject:'Cavity Protection',
        visitingHour:'11.00AM to 12.00PM',
        totalSpace:'6'
    },
    {
        id:5,
        subject:'Teeth cleaning',
        visitingHour:'12.00PM to 1.00PM',
        totalSpace:'8'
    },
    {
        id:6,
        subject:'Teeth cleaning',
        visitingHour:'2.00PM to 3.00AM',
        totalSpace:'12'
    },
]
const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center text-brand mb-5'>Available Appointment on {date.toDateString()}</h2>
            <div className='row'>
                {
                   BookingData.map(booking =><BookingCard key={booking.id} booking={booking} date={date}></BookingCard>) 
                }
            </div>
        </section>
    );
};

export default BookAppointment;