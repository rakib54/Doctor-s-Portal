import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import login from '../../../images/loginPage.png'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signInUser = { name: displayName, email }
                setLoggedInUser(signInUser)
                history.replace(from);

            }).catch((error) => {
                var email = error.email;
                console.log(email);
            });
    }

    return (
        <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow">
                    <div className="form-group mt-2">
                        <label htmlFor="">User Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="">Password</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="">Forgot your password?</label>
                    </div>
                    <div className="form-group mt-2">
                        <button className="btn btn-primary" type="submit">Sign in</button>
                    </div>
                    <div className="form-group mt-5 text-center">
                        <button onClick={handleGoogleSignIn} className="btn btn-danger" type="submit">Sign in with google</button>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block align-self-end">
                    <img className="img-fluid" src={login} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;