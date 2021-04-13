import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/AddDoctor/AddDoctor';
import PrivateRoute from '../src/components/Login/PrivateRoute/PrivateRoute'

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInuUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInuUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/patients">
              <AllPatients></AllPatients>
          </Route>
          <Route path="/addDoctor">
              <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
