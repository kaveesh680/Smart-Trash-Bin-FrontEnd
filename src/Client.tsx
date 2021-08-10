import React from 'react';
import LogIn from "./components/login/LogIn";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from "./components/register/Register";
import Home from "./components/user/Home";

const Client: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={LogIn}/>
                <Route path='/register' exact component={Register}/>
                <Route path='/user' exact component={Home}/>
            </Switch>
        </Router>

    )
}

export default Client;