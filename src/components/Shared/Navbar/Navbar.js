import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/home" class="nav-link ms-5 active" aria-current="page" >Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" class="nav-link ms-5" >About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to ="/dashboard" class="nav-link ms-5">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/admin" class="nav-link ms-5 text-white">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/blogs" class="nav-link ms-5 text-white" >Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="#" class="nav-link ms-5 text-white" >Contact us</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;