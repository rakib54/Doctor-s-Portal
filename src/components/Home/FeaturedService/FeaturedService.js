import React from 'react';
import dentalCare from '../../../images/dentalCare.png'

const FeaturedService = () => {
    return (
        <section className="feature-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={dentalCare} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita laudantium quas voluptatum laborum commodi voluptatem eius? Temporibus quas dolorum laboriosam vero, tenetur repellendus, suscipit consequuntur saepe unde cumque quos alias reprehenderit aut quae soluta corrupti, a asperiores minima omnis non.</p>
                        <button className="btn btn-primary">Learn more</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;