import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor'


const Doctors = () => {
    const [doctorDetails, setDoctors] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data =>{
            setDoctors(data)
        })
    },[])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {/* <Doctor />
                    <Doctor />
                    <Doctor /> */}
                    {
                        doctorDetails.map(doc =><Doctor key={doc._id} doc={doc}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;