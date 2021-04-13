import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/Chair.png'

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smiles Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolores commodi tenetur, enim nulla mollitia.</p>
                <Link to='/appointment'><button className="btn btn-primary">GET APPOINTMENT</button></Link>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={chair} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;