import React from 'react';
import Ema from '../../../images/Ema.png'
import Steven from '../../../images/steven.png'
import Maria from '../../../images/maria.png'
import Testimonials from '../Testimonials/Testimonials';
import "./Testimonial.css"

const TestimonialData = [
    {
        id:1,
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name:'Maria',
        from:'Chittagong',
        img:Maria    
    },
    {
        id:2,
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name:'Ema Watson',
        from:'California',
        img:Ema    
    },
    {
        id:3,
        quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo!',
        name:'Steven',
        from:'Sidney',
        img:Steven    
    }
]

const Testimonial = () => {
    return (
        <section className='testimonials my-5 py-5'>
            <div className='container'>
                <div className='section-header text-lg-start text-center'>
                    <h5 className='text-primary'>TESTIMONIAL</h5>
                    <h1>What's Our Patients <br/>Says</h1>
                </div>
                <div className='row card-deck mt-5 d-flex justify-content-around'>
                    {
                        TestimonialData.map(testimonial =><Testimonials key={testimonial.id}  testimonial={testimonial}></Testimonials>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;