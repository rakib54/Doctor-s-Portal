import React from 'react';

const Testimonials = ({ testimonial }) => {
    return (
        <div className='card shadow-sm col-md-4 col-sm-12'>
            <div className='card-body'>
                <p className='card-text text-center'>{testimonial.quote}</p>
            </div>
            <div className="row">
                <div className='card-footer d-flex align-items-center'>
                    <img className='mx-3 ' src={testimonial.img} alt="" width='60' />
                    <div>
                        <h6 className="text-primary">{testimonial.name}</h6>
                        <p className='m-0'>{testimonial.from}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;